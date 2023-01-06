import {themeHome} from 'Themes/Home' 
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from 'Assets/img/Logo.png'
import { ThemeProvider } from '@emotion/react';
import { Facebook, Instagram } from '@mui/icons-material';


const pages = ['Instituto', 'Atendimentos', 'NossoBlog', 'Contato', 'Transparência'];
const settings = ['Instituto', 'Atendimentos', 'NossoBlog', 'Contato', 'Transparência'];

function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={themeHome}>

    <AppBar sx={{backgroundColor: 'white', position: 'fixed', top: 0, ml:0}}>
      <Container maxWidth="xl"  sx={{ fontFamily: 'Helvetica Neue'}} >
        <Toolbar disableGutters>        

          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 2}}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon fontSize='large'/>
             <Typography sx={{fontSize : '16px'}}>
              Menu
            </Typography>
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            > 
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Typography
            variant="h3"
            noWrap
            component="a"
            href=""
            sx={{
              ml : 21,
              display: { xs: 'flex', md: 'none' },             
            }}
            >
        <img height="70px" src={Logo} />
          </Typography>
          </Box>
          
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'space-between', mx:9}}>
        
        <Typography><img height="80px" src={Logo} /></Typography>
        <Box sx={{ display:'flex'}}>
          {pages.map((page) => (
            <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 1, pl: 4, pr: 4, color: 'black', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <Box sx={{display: "inline-flex", pt: 3}}>          
            <Typography>
              <Instagram sx={{ pr: 4}} fontSize='large' color='primary'/>
              <Facebook fontSize='large' color='primary'/>
            </Typography>
          </Box>  
      </Box>
          <Box sx={{ flexGrow: 0 }}>
           
            <Menu
              sx={{ mt: '15px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default NavigationBar;