import React from 'react';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import HardwareIcon from '@mui/icons-material/Hardware';
import ScienceIcon from '@mui/icons-material/Science';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface CycleTimeProps {
  developmentDays: number;
  reviewDays: number;
  testDays: number;
}

export const CycleTime: React.FC<CycleTimeProps> = ({ developmentDays = 0, reviewDays = 0, testDays = 0 }) => {
  // Helper function to determine the color based on the value.
  const getBadgeColor = (value: number) => {
    if (value < 2) {
      return 'success';
    } else if (value > 2) {
      return 'error'; // "success" corresponds to green in Material UI
    } else {
      return 'warning';
    }
  };

  // Encapsulate the common anchorOrigin configuration and assert its literal type using 'as const'
  const badgeAnchorOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
  } as const;

  return (
    <>
      <Tooltip title="Development Days">
        <Badge badgeContent={developmentDays} color={getBadgeColor(developmentDays)} anchorOrigin={badgeAnchorOrigin}>
          <HardwareIcon />
        </Badge>
      </Tooltip>
      &nbsp;&nbsp;&nbsp;
      <Tooltip title="Review Days">
        <Badge badgeContent={reviewDays} color={getBadgeColor(reviewDays)} anchorOrigin={badgeAnchorOrigin}>
          <VisibilityIcon />
        </Badge>
      </Tooltip>
      &nbsp;&nbsp;&nbsp;
      <Tooltip title="Test Days">
        <Badge badgeContent={testDays} color={getBadgeColor(testDays)} anchorOrigin={badgeAnchorOrigin}>
          <ScienceIcon />
        </Badge>
      </Tooltip>
    </>
  );
};
