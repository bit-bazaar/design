import BaseLink from '@mui/material/Link';
import type { LinkProps as BaseLinkProps } from '@mui/material';

export interface LinkProps extends BaseLinkProps {
  /**
   * prevent type errors when using the `to` prop
   * in combination with the react-router-dom `Link` component which is set by the custom theme
   */
  to?: string;
}

export const Link = ({ children, ...rest }: LinkProps) => {
  return <BaseLink {...rest}>{children}</BaseLink>;
};
