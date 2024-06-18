import BaseBox from '@mui/material/Box';
import type { BoxProps as BaseBoxProps } from '@mui/material';

export interface BoxProps extends BaseBoxProps {}

export const Box = ({ children, ...rest }: BoxProps) => {
  return <BaseBox {...rest}>{children}</BaseBox>;
};
