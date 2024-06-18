import BaseContainer from '@mui/material/Container';
import type { ContainerProps as BaseContainerProps } from '@mui/material';

export interface ContainerProps extends BaseContainerProps {}

export const Container = ({ children, ...rest }: ContainerProps) => {
  return <BaseContainer {...rest}>{children}</BaseContainer>;
};
