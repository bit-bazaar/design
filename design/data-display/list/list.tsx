import BaseList from '@mui/material/List';
import BaseListItem from '@mui/material/ListItem';
import BaseListItemButton from '@mui/material/ListItemButton';
import BaseListItemText from '@mui/material/ListItemText';
import type { ListProps as BaseListProps } from '@mui/material/List';
import type { ListItemProps as BaseListItemProps } from '@mui/material/ListItem';
import type { ListItemButtonProps as BaseListItemButtonProps } from '@mui/material/ListItemButton';
import type { ListItemTextProps as BaseListItemTextProps } from '@mui/material/ListItemText';

export interface ListProps extends BaseListProps {}
export interface ListItemProps extends BaseListItemProps {}
export interface ListItemButtonProps extends BaseListItemButtonProps {
  to?: string;
}
export interface ListItemTextProps extends BaseListItemTextProps {}

export const List = ({ children, ...rest }: ListProps) => {
  return <BaseList {...rest}>{children}</BaseList>;
};

export const ListItem = ({ children, ...rest }: ListItemProps) => {
  return <BaseListItem {...rest}>{children}</BaseListItem>;
};

export const ListItemButton = ({ children, ...rest }: ListItemButtonProps) => {
  return <BaseListItemButton {...rest}>{children}</BaseListItemButton>;
};

export const ListItemText = ({ children, ...rest }: ListItemTextProps) => {
  return <BaseListItemText {...rest}>{children}</BaseListItemText>;
};
