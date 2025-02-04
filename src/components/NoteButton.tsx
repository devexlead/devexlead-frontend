import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import CommentIcon from '@mui/icons-material/Comment';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';

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
  // State to track the current note count.
  const [noteCount, setNoteCount] = useState<number>(count);
  // State to control dialog visibility.
  const [isDialogVisible, setDialogVisibility] = useState<boolean>(false);
  // State to hold the note text.
  const [note, setNote] = useState<string>('');

  // Open the dialog when the button is clicked.
  const handleClick = () => {
    setDialogVisibility(true);
  };

  // Close the dialog.
  const handleClose = () => {
    setDialogVisibility(false);
  };

  // Handle form submission: you can process the note here before incrementing the counter.
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process or save the note (e.g., send to an API) here if needed.
    setNoteCount(noteCount + 1);
    setNote(''); // Clear the text field.
    setDialogVisibility(false); // Close the dialog.
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Tooltip title="Add Note">
          <CommentIcon fontSize="small" />
        </Tooltip>
        <CommentBadge badgeContent={noteCount} color="primary" overlap="circular" />
      </IconButton>

      <Dialog open={isDialogVisible}>
        <DialogTitle>Add Note</DialogTitle>
        <form onSubmit={handleFormSubmit}>
          <DialogContent>
            <TextField autoFocus margin="dense" id="note" label="Your note" type="text" fullWidth variant="outlined" value={note} onChange={(e) => setNote(e.target.value)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Add Note
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
