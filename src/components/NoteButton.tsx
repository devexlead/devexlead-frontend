import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import CommentIcon from '@mui/icons-material/Comment';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export const NoteButton = () => {
  return (
    <IconButton>
      <CommentIcon fontSize="small" />
      <CartBadge badgeContent={1} color="primary" overlap="circular" />
    </IconButton>
  );
};
