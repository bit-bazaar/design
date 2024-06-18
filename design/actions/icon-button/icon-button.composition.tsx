import { DarkModeOutlined } from '@mui/icons-material';
import { IconButton } from './icon-button.js';

export const IconButtonExample = () => {
  return (
    <IconButton
      size="small"
      sx={{
        transition: 'all 0.3s ease',
        color: 'inherit',
      }}
    >
      <DarkModeOutlined />
    </IconButton>
  );
};
