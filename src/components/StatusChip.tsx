import React from 'react';
import Chip from '@mui/material/Chip';

interface StatusChipProps {
  status: string;
}

const StatusChip: React.FC<StatusChipProps> = ({ status }) => {
  // Determine the chip color based on the status value
  const getChipColor = (status: string): 'error' | 'warning' | 'success' => {
    if (['Development', 'Review', 'Test'].includes(status)) {
      return 'warning';
    } else if (status === 'Done') {
      return 'success';
    } else {
      return 'error';
    }
  };

  return <Chip label={status} color={getChipColor(status)} />;
};

export default StatusChip;
