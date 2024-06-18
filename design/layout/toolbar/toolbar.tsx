import BaseToolbar from '@mui/material/Toolbar';
import type { ToolbarProps as BaseToolbarProps } from '@mui/material';

export interface ToolbarProps extends BaseToolbarProps {}

export const Toolbar = ({ children, ...rest }: ToolbarProps) => {
  return <BaseToolbar {...rest}> {children} </BaseToolbar>;
};
