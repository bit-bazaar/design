import BaseAvatar from '@mui/material/Avatar';
import BaseAvatarGroup from '@mui/material/AvatarGroup';
import type {
  AvatarProps as BaseAvatarProps,
  AvatarGroupProps as BaseAvatarGroupProps,
} from '@mui/material';

export interface AvatarProps extends BaseAvatarProps {}

export const Avatar = ({ children, ...rest }: AvatarProps) => {
  return <BaseAvatar {...rest}>{children}</BaseAvatar>;
};

export interface AvatarGroupProps extends BaseAvatarGroupProps {}

export const AvatarGroup = ({ children, ...rest }: AvatarGroupProps) => {
  return <BaseAvatarGroup {...rest}>{children}</BaseAvatarGroup>;
};
