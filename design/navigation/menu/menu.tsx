import BaseMenu from '@mui/material/Menu';
import BaseMenuItem from '@mui/material/MenuItem';
import type { MenuProps as BaseMenuProps } from '@mui/material';
import type { MenuItemProps as BaseMenuItemProps } from '@mui/material';

export interface MenuProps extends BaseMenuProps {}

export interface MenuItemProps extends BaseMenuItemProps {
  /**
   * prevent type errors when using the `to` prop
   * in combination with the react-router-dom `Link` component which is set by the custom theme
   */
  to?: string;
}

export const Menu = ({ children, ...rest }: MenuProps) => {
  return <BaseMenu {...rest}>{children}</BaseMenu>;
};

export const MenuItem = ({ children, ...rest }: MenuItemProps) => {
  return <BaseMenuItem {...rest}>{children}</BaseMenuItem>;
};
