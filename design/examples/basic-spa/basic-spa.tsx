import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@bit-bazaar/design.theme.theme-provider';
import { AppBar } from '@bit-bazaar/design.examples.layout.app-bar';
import { HomePage } from '@bit-bazaar/design.examples.pages.homepage';
import { AboutPage } from '@bit-bazaar/design.examples.pages.about-page';

export function BasicSpa() {
  return (
    <ThemeProvider>
      <AppBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AppBar>
    </ThemeProvider>
  );
}
