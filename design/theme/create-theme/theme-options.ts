import type { ThemeOptions as BaseThemeOptions } from "@mui/material";
import type { TypographyVariantsOptions } from "@bit-bazaar/design.typography.typography";

/**
 * extend the options of the theme with an additional typography variants
 */
export interface ThemeOptions extends BaseThemeOptions {
  typography?: TypographyVariantsOptions;
}
