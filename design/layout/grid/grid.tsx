import BaseGrid from '@mui/material/Grid';
import type { GridProps as BaseGridProps } from '@mui/material';

export interface GridProps extends BaseGridProps {}

export const Grid = ({ children, ...rest }: GridProps) => {
  // @ts-ignore
  return <BaseGrid {...rest}>{children}</BaseGrid>;
};
