import React from 'react';
import Chip from '@mui/material/Chip';

interface MetricChipProps {
  value: number;
  direction: 'ascending' | 'descending';
  upperLimit: number;
  lowerLimit: number;
  symbol?: string;
}

export const MetricChip: React.FC<MetricChipProps> = ({
  value,
  direction,
  upperLimit,
  lowerLimit,
  symbol = '',
}) => {
  let color: 'success' | 'warning' | 'error';

  if (direction === 'descending') {
    if (value >= upperLimit) {
      color = 'success';
    } else if (value >= lowerLimit) {
      color = 'warning';
    } else {
      color = 'error';
    }
  } else {
    if (value >= upperLimit) {
      color = 'error';
    } else if (value >= lowerLimit) {
      color = 'warning';
    } else {
      color = 'success';
    }
  }

  return <Chip label={`${value}${symbol}`} color={color} size="small" />;
};
