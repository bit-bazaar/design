import BaseIconButton from '@mui/material/IconButton';
import type { IconButtonProps as BaseIconButtonProps } from '@mui/material';

export interface IconButtonProps extends BaseIconButtonProps {
  /**
   * prevent type errors when using the `to` prop
   * in combination with the react-router-dom `Link` component which is set by the custom theme
   */
  to?: string;
}

export function IconButton({ children, ...rest }: IconButtonProps) {
  return <BaseIconButton {...rest}>{children}</BaseIconButton>;
}
