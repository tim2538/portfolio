import { CssBaseline, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

export interface ColorModeContextType {
  toggleColorMode: () => void;
  selectColorMode: (theme: 'light' | 'dark' | 'system') => void;
  mode: 'light' | 'dark';
  currentTheme: 'light' | 'dark' | 'system';
}

export const ColorModeContext = React.createContext<ColorModeContextType>({
  toggleColorMode: () => {},
  selectColorMode: (theme: 'light' | 'dark' | 'system') => {},
  mode: 'light',
  currentTheme: 'light'
});

function AppWithTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [currentTheme, setCurrentTheme] = React.useState<
    'light' | 'dark' | 'system'
  >(getCurrentTheme());
  const [mode, setMode] = React.useState<'light' | 'dark'>(
    getCurrentMode(prefersDarkMode, currentTheme)
  );

  function getCurrentTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') return 'light';
    if (theme === 'dark') return 'dark';
    return 'system';
  }

  function getCurrentMode(
    prefersDarkMode: boolean,
    currentTheme: 'light' | 'dark' | 'system'
  ) {
    if (currentTheme !== 'system') {
      return currentTheme;
    } else {
      return prefersDarkMode ? 'dark' : 'light';
    }
  }

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newMode);
          return newMode;
        });
      },
      selectColorMode: (theme: 'light' | 'dark' | 'system') => {
        setCurrentTheme(theme);
        // No need to use setMode because when currentTheme was changed, mode will be changed at useEffect below.
        if (theme === 'system') {
          localStorage.removeItem('theme');
        } else {
          localStorage.setItem('theme', theme);
        }
      }
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: { main: '#5899e3', contrastText: '#fafafa' },
                success: { main: '#42b72a' },
                background: { default: '#fafafa', paper: '#fefefe' }
              }
            : {
                primary: { main: '#f2d5a0' },
                success: { main: '#42b72a' },
                background: { default: '#0f0d0a' }
              })
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: Number.MAX_VALUE,
                textTransform: 'none'
              }
            }
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: '16px'
              }
            }
          }
        }
      }),
    [mode]
  );

  React.useEffect(() => {
    setMode(getCurrentMode(prefersDarkMode, currentTheme));
  }, [prefersDarkMode, currentTheme]);

  return (
    <ColorModeContext.Provider value={{ ...colorMode, mode, currentTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <AppWithTheme />
    </HashRouter>
  </React.StrictMode>
);
