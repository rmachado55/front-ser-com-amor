import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#ffd95a',
      main: '#f9a825',
      dark: '#c17900',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ff6434',
      main: '#dd2c00',
      dark: '#a30000',
      contrastText: '#ffffff',
    },
  },
});