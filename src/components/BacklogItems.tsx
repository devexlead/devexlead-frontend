import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CycleTime } from './CycleTime';
import { Tags } from './Tags';
import { NoteButton } from './NoteButton';
import StatusChip from './StatusChip';

interface ApiResponse {
  data: BacklogItem[];
}

interface BacklogItem {
  id: string;
  title: string;
  status: string;
  cycleTime: {
    development: number;
    review: number;
    test: number;
  };
  noteCount: number;
  tags: {
    isRework?: boolean;
    isBlocked?: boolean;
    isUpdated?: boolean;
    isIncident?: boolean;
    isUnplanned?: boolean;
    isReEstimated?: boolean;
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
            <TableCell align="left">
              <strong>ID</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Type</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Title</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Status</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Cycle Time</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Notes</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Tags</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {backlogItems.map(({ id, title, status, cycleTime, noteCount, tags }) => (
            <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left">{id}</TableCell>
              <TableCell align="left">Task</TableCell>
              <TableCell align="left">{title}</TableCell>
              <TableCell align="left">
                <StatusChip status={status} />
              </TableCell>
              <TableCell align="left">
                <CycleTime developmentDays={cycleTime.development} reviewDays={cycleTime.review} testDays={cycleTime.test} />
              </TableCell>
              <TableCell>
                <NoteButton count={noteCount} />
              </TableCell>
              <TableCell align="left">
                <Tags
                  showRework={tags.isRework}
                  showBlocked={tags.isBlocked}
                  showUpdated={tags.isUpdated}
                  showIncident={tags.isIncident}
                  showUnplanned={tags.isUnplanned}
                  showReEstimated={tags.isReEstimated}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
