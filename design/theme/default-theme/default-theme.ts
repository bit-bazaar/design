// import React from 'react';
import {
  createTheme,
  type ThemeOptions,
} from '@bit-bazaar/design.theme.create-theme';
import { Link as RouterLink } from 'react-router-dom';
import type { LinkProps } from '@mui/material/Link';
import { getDefaultFonts } from '@bit-bazaar/design.typography.get-default-fonts';

export function defaultTheme(): ThemeOptions {
  return createTheme({
    components: {
      MuiCssBaseline: {
        /**
         * global CSS overrides
         * immediately load the default fonts
         * */
        styleOverrides: getDefaultFonts(),
      },
      /**
       * use the react-router-dom Link component as the default component to handle routing
       */
      MuiLink: {
        defaultProps: {
          component: RouterLink,
        } as LinkProps,
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: RouterLink,
        },
      },
      MuiListItemButton: {
        defaultProps: {
          component: RouterLink,
        },
      },
      MuiMenuItem: {
        defaultProps: {
          component: RouterLink,
        },
      },
    },
    /**
     * custom palette
     */
    palette: {
      mode: 'light',
      primary: {
        main: '#4d64a8',
      },
      secondary: {
        main: '#da8f91',
      },
      success: {
        main: '#70bf72',
      },
      background: {
        default: '#fbfbfb',
      },
    },
    typography: {
      fontFamily: 'Outfit, sans-serif',
      /* this is the custom typography variant */
      handwriting: {
        fontFamily: 'Handlee, cursive',
      },
    },
  });
}
