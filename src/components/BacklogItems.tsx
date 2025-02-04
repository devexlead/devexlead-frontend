import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CycleTime } from './CycleTime';
import { BacklogItemFlags } from './BacklogItemFlags';

interface BacklogItemRow {
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

const backlogItemRows: BacklogItemRow[] = [
  {
    id: 'DX-1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet',
    cycleTime: { development: 2, review: 3, test: 0 },
    flags: { isBlocked: true },
  },
  {
    id: 'DX-2',
    title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    cycleTime: { development: 3, review: 2, test: 2 },
    flags: { isNonEstimated: true },
  },
  {
    id: 'DX-3',
    title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    cycleTime: { development: 5, review: 6, test: 0 },
    flags: { isIncident: true },
  },
  {
    id: 'DX-4',
    title: 'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor',
    cycleTime: { development: 1, review: 9, test: 2 },
    flags: { isRework: true, isComments: true },
  },
  {
    id: 'DX-5',
    title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    cycleTime: { development: 5, review: 0, test: 0 },
    flags: { isComments: true },
  },
];

export const BacklogItems: React.FC = () => {
  const backlogItemsTable: JSX.Element[] = [];

  // Use a for loop to create a TableRow for each item in the rows array.
  for (let i = 0; i < backlogItemRows.length; i++) {
    const row = backlogItemRows[i];
    backlogItemsTable.push(
      <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell align="left">{row.id}</TableCell>
        <TableCell align="left">Team</TableCell>
        <TableCell align="left">Type</TableCell>
        <TableCell align="left">Investment</TableCell>
        <TableCell align="left">{row.title}</TableCell>
        <TableCell align="left">
          <CycleTime development={row.cycleTime.development} review={row.cycleTime.review} test={row.cycleTime.test} />
        </TableCell>
        <TableCell align="left">
          <BacklogItemFlags
            showRework={row.flags.isRework}
            showBlocked={row.flags.isBlocked}
            showUpdated={row.flags.isUpdated}
            showIncident={row.flags.isIncident}
            showUnplanned={row.flags.isUnplanned}
            showReEstimated={row.flags.isReEstimated}
            showNonEstimated={row.flags.isNonEstimated}
            showSubTasks={row.flags.isSubTasks}
            showComments={row.flags.isComments}
          />
        </TableCell>
      </TableRow>,
    );
  }

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
              <b>Investmet</b>
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
