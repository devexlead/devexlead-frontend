import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import BlockIcon from '@mui/icons-material/Block';
import UpdateIcon from '@mui/icons-material/Update';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SwapVerticalCircleRoundedIcon from '@mui/icons-material/SwapVerticalCircleRounded';

interface TagsProps {
  showRework?: boolean;
  showBlocked?: boolean;
  showUpdated?: boolean;
  showIncident?: boolean;
  showUnplanned?: boolean;
  showReEstimated?: boolean;
  showNonEstimated?: boolean;
  showSubTasks?: boolean;
}

export const Tags: React.FC<TagsProps> = ({ showRework = false, showBlocked = false, showUpdated = false, showIncident = false, showUnplanned = false, showReEstimated = false }) => {
  return (
    <>
      {showRework && (
        <Tooltip title="Rework">
          <SwapHorizontalCircleIcon />
        </Tooltip>
      )}

      {showBlocked && (
        <Tooltip title="Blocked">
          <BlockIcon />
        </Tooltip>
      )}

      {showUpdated && (
        <Tooltip title="Updated">
          <UpdateIcon />
        </Tooltip>
      )}

      {showIncident && (
        <Tooltip title="Incident">
          <LocalFireDepartmentIcon />
        </Tooltip>
      )}

      {showUnplanned && (
        <Tooltip title="Unplanned">
          <ErrorOutlineIcon />
        </Tooltip>
      )}

      {showReEstimated && (
        <Tooltip title="Re-Estimated">
          <SwapVerticalCircleRoundedIcon />
        </Tooltip>
      )}
    </>
  );
};
