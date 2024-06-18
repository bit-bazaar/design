import BaseCard from '@mui/material/Card';
import BaseCardHeader from '@mui/material/CardHeader';
import BaseCardMedia from '@mui/material/CardMedia';
import BaseCardContent from '@mui/material/CardContent';
import BaseCardActions from '@mui/material/CardActions';
import type {
  CardProps as BaseCardProps,
  CardHeaderProps as BaseCardHeaderProps,
  CardMediaProps as BaseCardMediaProps,
  CardContentProps as BaseCardContentProps,
  CardActionsProps as BaseCardActionsProps,
} from '@mui/material';

export interface CardProps extends BaseCardProps {}

export const Card = ({ children, ...rest }: CardProps) => {
  return <BaseCard {...rest}>{children}</BaseCard>;
};

export interface CardHeaderProps extends BaseCardHeaderProps {}

export const CardHeader = ({ children, ...rest }: CardHeaderProps) => {
  return <BaseCardHeader {...rest}>{children}</BaseCardHeader>;
};

export interface CardMediaProps extends BaseCardMediaProps {}

export const CardMedia = ({ children, ...rest }: CardMediaProps) => {
  return <BaseCardMedia {...rest}>{children}</BaseCardMedia>;
};

export interface CardContentProps extends BaseCardContentProps {}

export const CardContent = ({ children, ...rest }: CardContentProps) => {
  return <BaseCardContent {...rest}>{children}</BaseCardContent>;
};

export interface CardActionsProps extends BaseCardActionsProps {}

export const CardActions = ({ children, ...rest }: CardActionsProps) => {
  return <BaseCardActions {...rest}>{children}</BaseCardActions>;
};
