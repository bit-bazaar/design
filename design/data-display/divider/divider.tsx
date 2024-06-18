import BaseDivider from '@mui/material/Divider';
import type { DividerProps as BaseDividerProps } from '@mui/material';

export interface DividerProps extends BaseDividerProps {}

export const Divider = ({ ...props }: DividerProps) => {
  return <BaseDivider {...props} />;
};
