import type { Theme } from "@mui/material";
import { createTheme as createThemeBase } from "@mui/material/styles";
/* MUI's ThemeOptions type extended with custom properties */
import type { ThemeOptions } from "./theme-options.js";

/**
 * Create a theme with the specified options.
 * @param options  Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready-to-use theme object.
 */
export function createTheme(options: ThemeOptions, ...args: object[]): Theme {
  return createThemeBase(options, ...args);
}
