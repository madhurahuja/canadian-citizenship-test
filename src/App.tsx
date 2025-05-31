import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import {
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
} from '@mui/icons-material';
import Quiz from './components/Quiz';
import Home from './components/Home';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';

const App: React.FC = () => {
  // Use system preference as default mode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#E53935', // Red color similar to Canadian flag
          },
          secondary: {
            main: mode === 'dark' ? '#fff' : '#000',
          },
          background: {
            default: mode === 'dark' ? '#121212' : '#F5F5F5',
            paper: mode === 'dark' ? '#1E1E1E' : '#FFFFFF',
          },
          text: {
            primary: mode === 'dark' ? '#fff' : '#000',
            secondary: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
          },
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 700,
          },
          h2: {
            fontWeight: 600,
          },
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'dark' ? '#1E1E1E' : '#FFFFFF',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
              },
            },
          },
        },
      }),
    [mode]
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <AppBar position="fixed" color="default" elevation={1}>
            <Toolbar>
              <Box
                component={Link}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <img
                  src="/logo.svg"
                  alt="Canadian Citizenship Test"
                  style={{ height: 40, marginRight: 16 }}
                />
                <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                  Canadian Citizenship Test
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <IconButton 
                  onClick={toggleColorMode} 
                  color="inherit"
                  sx={{ mr: 1 }}
                  aria-label="toggle dark mode"
                >
                  {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                <Button
                  component={Link}
                  to="/"
                  color="inherit"
                >
                  Home
                </Button>
                <Button
                  component={Link}
                  to="/quiz"
                  variant="contained"
                  color="primary"
                >
                  Practice Quiz
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
          <Toolbar /> {/* Empty toolbar to offset the fixed AppBar */}
          
          <Container sx={{ flex: 1, py: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
            </Routes>
          </Container>

          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
