import './Admin.css'
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Items, subItems } from './Items';
import Logo from 'Assets/img/Logo.png'
import { theme } from './Theme';
import { AppBar, Drawer } from './Menus';

export default function Admin (props: { setAuth: React.Dispatch<React.SetStateAction<boolean>> } )
{
  const open = true;

  return (
    <ThemeProvider theme={ theme }>
      <Box sx={ { display: 'flex' } }>
        <CssBaseline />
        <AppBar position="absolute" open={ open }>

          <Toolbar>
            <Typography
              component="h1"
              variant="h5"
              color="inherit"
              noWrap
            >
              Portal Admin
            </Typography>
          </Toolbar>

        </AppBar>
        <Drawer variant="permanent" open={ open }>
          <Toolbar>
            <img src={ Logo } className="logo_top" />
          </Toolbar>
          <Divider />
          <List component="nav">
            { Items }
            <Divider />
            { subItems }
          </List>
        </Drawer>
        <Box
          component="main"
          sx={ {
            backgroundColor: ( theme ) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[ 100 ]
                : theme.palette.grey[ 900 ],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          } }
        >
          <Toolbar />
         o eo eo eo eo e
        </Box>
      </Box>
    </ThemeProvider>
  );
}
