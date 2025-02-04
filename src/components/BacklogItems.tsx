import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CycleTime } from './CycleTime';
import { BacklogItemFlags } from './BacklogItemFlags';

interface ApiResponse {
  data: BacklogItem[];
}

interface BacklogItem {
  id: string;
  title: string;
  cycleTime: {
    development: number;
    review: number;
    test: number;
  };
  flags: {
    isRework?: boolean;
    isBlocked?: boolean;
    isUpdated?: boolean;
    isIncident?: boolean;
    isUnplanned?: boolean;
    isReEstimated?: boolean;
    isNonEstimated?: boolean;
    isSubTasks?: boolean;
    isComments?: boolean;
  };
}

export const BacklogItems: React.FC = () => {
  const [backlogItems, setBacklogItems] = useState<BacklogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBacklogItems = async () => {
      try {
        const response = await fetch('https://devexlead.com/api/v1/backlog', {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json: ApiResponse = await response.json();
        setBacklogItems(json.data);
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          setError(error.message);
          console.error('Error fetching backlog items:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBacklogItems();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ tableLayout: 'auto', width: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ width: '50px' }}>
              <strong>ID</strong>
            </TableCell>
            <TableCell align="left" sx={{ width: '100px' }}>
              <strong>Team</strong>
            </TableCell>
            <TableCell align="left" sx={{ width: '5%' }}>
              <strong>Type</strong>
            </TableCell>
            <TableCell align="left" sx={{ width: '5%' }}>
              <strong>Investment</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Title</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Cycle Time</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Flags</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {backlogItems.map(({ id, title, cycleTime, flags }) => (
            <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left">{id}</TableCell>
              <TableCell align="left">Team</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Investment</TableCell>
              <TableCell align="left">{title}</TableCell>
              <TableCell align="left">
                <CycleTime development={cycleTime.development} review={cycleTime.review} test={cycleTime.test} />
              </TableCell>
              <TableCell align="left">
                <BacklogItemFlags
                  showRework={flags.isRework}
                  showBlocked={flags.isBlocked}
                  showUpdated={flags.isUpdated}
                  showIncident={flags.isIncident}
                  showUnplanned={flags.isUnplanned}
                  showReEstimated={flags.isReEstimated}
                  showNonEstimated={flags.isNonEstimated}
                  showSubTasks={flags.isSubTasks}
                  showComments={flags.isComments}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
