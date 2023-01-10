import { createTheme } from '@mui/material/styles';

export const themeHome = createTheme({
  palette: {
    primary: {
      light: '#C3B29E',
      main: '#ffb21a',
      dark: '#c17900',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ff6434',
      main: '#dd0b1c',
      dark: '#a30000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f6f7f9',            
    }    
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'Dancing Script'      
    ].join(','),
  },
  
});