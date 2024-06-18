import { IconButton } from '@bit-bazaar/design.actions.icon-button';
import { DarkModeOutlined, WbSunnyOutlined } from '@mui/icons-material';

export type DarkModeToggleProps = {
  /**
   * Whether the dark mode is enabled or not.
   */
  isDark: boolean;

  /**
   * Callback to toggle the dark mode.
   */
  onClick: () => void;

  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
};

export function DarkModeToggle({
  isDark,
  onClick,
  size = 'small',
}: DarkModeToggleProps) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        transition: 'all 0.3s ease',
        color: 'inherit',
      }}
    >
      {isDark ? (
        <DarkModeOutlined fontSize={size} />
      ) : (
        <WbSunnyOutlined fontSize={size} />
      )}
    </IconButton>
  );
}
