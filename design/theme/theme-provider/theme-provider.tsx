import '@emotion/styled';
import '@emotion/react';
import { ReactNode } from 'react';
import {
  type ThemeOptions,
  ThemeProvider as BaseThemeProvider,
  // @ts-ignore - no types available for ThemeProvider
} from '@mui/material/styles';
// @ts-ignore - no types available
import CssBaseline from '@mui/material/CssBaseline';
import { defaultTheme } from '@bit-bazaar/design.theme.default-theme';

export type ThemeProviderProps = {
  /**
   * The children to render within the theme.
   */
  children?: ReactNode;

  /**
   * The theme to use.
   */
  theme?: ThemeOptions;
};

export function ThemeProvider({
  children,
  theme = defaultTheme(),
}: ThemeProviderProps) {
  return (
    <BaseThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {children}
      </>
    </BaseThemeProvider>
  );
}
