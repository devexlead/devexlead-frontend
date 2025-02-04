import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import CommentIcon from '@mui/icons-material/Comment';

const CommentBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

interface NoteButtonProps {
  count: number;
}

export const NoteButton: React.FC<NoteButtonProps> = ({ count }) => {
  const [noteCount, setNoteCounter] = useState<number>(count);

  const handleClick = () => {
    setNoteCounter(noteCount + 1);
  };

  return (
    <IconButton onClick={handleClick}>
      <CommentIcon fontSize="small" />
      <CommentBadge badgeContent={noteCount} color="primary" overlap="circular" />
    </IconButton>
  );
};
