import type { CSSProperties } from 'react';
import type {
  TypographyProps as TypographyPropsMUI,
  TypographyVariant as BaseTypographyVariant,
  TypographyVariantsOptions as BaseTypographyVariantsOptions,
} from '@mui/material';
import BaseTypography from '@mui/material/Typography';

/**
 * the Typography component is extended with the 'handwriting' variant
 */

export type TypographyVariant = 'handwriting' | BaseTypographyVariant;

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    handwriting: true;
  }
}

export interface TypographyProps extends TypographyPropsMUI {
  variant?: TypographyVariant;
}

export function Typography({ children, ...rest }: TypographyProps) {
  return <BaseTypography {...rest}>{children}</BaseTypography>;
}

/**
 * this interface can be used by the theme to define the typography variants
 */
export interface TypographyVariantsOptions
  extends BaseTypographyVariantsOptions {
  handwriting?: CSSProperties;
}
