import React from 'react';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import HardwareIcon from '@mui/icons-material/Hardware';
import ScienceIcon from '@mui/icons-material/Science';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface CycleTimeProps {
  development: number;
  review: number;
  test: number;
}

export const CycleTime: React.FC<CycleTimeProps> = ({
  development = 0,
  review = 0,
  test = 0,
}) => {
  return (
    <>
      <Badge
        badgeContent={development}
        color="primary"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Tooltip title="Development">
          <HardwareIcon />
        </Tooltip>
      </Badge>
      &nbsp;&nbsp;&nbsp;
      <Badge
        badgeContent={review}
        color="primary"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Tooltip title="Review">
          <VisibilityIcon />
        </Tooltip>
      </Badge>
      &nbsp;&nbsp;&nbsp;
      <Badge
        badgeContent={test}
        color="primary"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Tooltip title="Testing">
          <ScienceIcon />
        </Tooltip>
      </Badge>
    </>
  );
};
