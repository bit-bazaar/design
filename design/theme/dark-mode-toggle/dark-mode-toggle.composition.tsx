import { useState } from 'react';
import { defaultTheme } from '@bit-bazaar/design.theme.default-theme';
import { darkTheme } from '@bit-bazaar/design.theme.dark-theme';
import { ThemeProvider } from '@bit-bazaar/design.theme.theme-provider';
import { DarkModeToggle } from './dark-mode-toggle.js';

export const BasicDarkToggle = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeProvider theme={isDark ? darkTheme() : defaultTheme()}>
      <DarkModeToggle
        size="medium"
        isDark={isDark}
        onClick={() => setIsDark(!isDark)}
      />
    </ThemeProvider>
  );
};
