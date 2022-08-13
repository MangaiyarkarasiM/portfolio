import React from 'react';

export const ThemeContext = React.createContext();

// Provider
export const ThemeProvider = ThemeContext.Provider;

// Consumer
export const ThemeConsumer = ThemeContext.Consumer;