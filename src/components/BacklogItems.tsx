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

  useEffect(() => {
    // Replace this URL with your actual REST API endpoint.
    fetch('https://devexlead.com/api/v1/backlog')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json: ApiResponse) => {
        setBacklogItems(json.data);
      })
      .catch((error) => {
        console.error('Error fetching backlog items:', error);
      });
  }, []);

  const backlogItemsTable = backlogItems.map((item) => (
    <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="left">{item.id}</TableCell>
      <TableCell align="left">Team</TableCell>
      <TableCell align="left">Type</TableCell>
      <TableCell align="left">Investment</TableCell>
      <TableCell align="left">{item.title}</TableCell>
      <TableCell align="left">
        <CycleTime development={item.cycleTime.development} review={item.cycleTime.review} test={item.cycleTime.test} />
      </TableCell>
      <TableCell align="left">
        <BacklogItemFlags
          showRework={item.flags.isRework}
          showBlocked={item.flags.isBlocked}
          showUpdated={item.flags.isUpdated}
          showIncident={item.flags.isIncident}
          showUnplanned={item.flags.isUnplanned}
          showReEstimated={item.flags.isReEstimated}
          showNonEstimated={item.flags.isNonEstimated}
          showSubTasks={item.flags.isSubTasks}
          showComments={item.flags.isComments}
        />
      </TableCell>
    </TableRow>
  ));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ tableLayout: 'auto', width: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ width: '50px' }}>
              <b>ID</b>
            </TableCell>
            <TableCell align="left" sx={{ width: '100px' }}>
              <b>Team</b>
            </TableCell>
            <TableCell align="left" sx={{ width: '5%' }}>
              <b>Type</b>
            </TableCell>
            <TableCell align="left" sx={{ width: '5%' }}>
              <b>Investment</b>
            </TableCell>
            <TableCell align="left">
              <b>Title</b>
            </TableCell>
            <TableCell align="left">
              <b>Cycle Time</b>
            </TableCell>
            <TableCell align="left">
              <b>Flags</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{backlogItemsTable}</TableBody>
      </Table>
    </TableContainer>
  );
};
