import BaseButton from '@mui/material/Button';
import type { ButtonProps as BaseButtonProps } from '@mui/material';

export interface ButtonProps extends BaseButtonProps {
  /**
   * prevent type errors when using the `to` prop
   * in combination with the react-router-dom `Link` component which is set by the custom theme
   */
  to?: string;
}

export function Button({ children, ...rest }: ButtonProps) {
  return <BaseButton {...rest}>{children}</BaseButton>;
}
