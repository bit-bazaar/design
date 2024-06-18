import BaseAppBar from '@mui/material/AppBar';
import type { AppBarProps as BaseAppBarProps } from '@mui/material';

export interface AppBarProps extends BaseAppBarProps {}

export const AppBar = ({ children, ...rest }: AppBarProps) => {
  return <BaseAppBar {...rest}>{children}</BaseAppBar>;
};
