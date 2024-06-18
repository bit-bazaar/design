import { defaultTheme } from "@bit-bazaar/design.theme.default-theme";
import {
  createTheme,
  type ThemeOptions,
} from "@bit-bazaar/design.theme.create-theme";

export function darkTheme(): ThemeOptions {
  return createTheme(defaultTheme(), {
    palette: {
      type: "dark",
      primary: {
        main: "#6580f9",
      },
      secondary: {
        main: "#9d62da",
      },
      success: {
        main: "#70bf72",
      },
      background: {
        default: "#454546",
        paper: "#000000",
      },
      text: {
        primary: "#ffffff",
      },
    },
  });
}
