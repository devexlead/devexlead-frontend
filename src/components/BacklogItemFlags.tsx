import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import BlockIcon from '@mui/icons-material/Block';
import UpdateIcon from '@mui/icons-material/Update';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import NumbersIcon from '@mui/icons-material/Numbers';
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import CommentIcon from '@mui/icons-material/Comment';

interface BacklogItemFlagsProps {
  showRework?: boolean;
  showBlocked?: boolean;
  showUpdated?: boolean;
  showIncident?: boolean;
  showUnplanned?: boolean;
  showReEstimated?: boolean;
  showNonEstimated?: boolean;
  showSubTasks?: boolean;
  showComments?: boolean;
}

export const BacklogItemFlags: React.FC<BacklogItemFlagsProps> = ({
  showRework = false,
  showBlocked = false,
  showUpdated = false,
  showIncident = false,
  showUnplanned = false,
  showReEstimated = false,
  showNonEstimated = false,
  showSubTasks = false,
  showComments = false,
}) => {
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
          <NumbersIcon />
        </Tooltip>
      )}

      {showNonEstimated && (
        <Tooltip title="Non-Estimated">
          <HourglassDisabledIcon />
        </Tooltip>
      )}

      {showSubTasks && (
        <Tooltip title="Sub-Tasks">
          <AssignmentLateIcon />
        </Tooltip>
      )}

      {showComments && (
        <Tooltip title="Comments">
          <CommentIcon />
        </Tooltip>
      )}
    </>
  );
};
