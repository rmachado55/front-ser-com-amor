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
import { Link } from 'react-router-dom';


const pages = [
  {exib : 'Instituto',
  link: "/#instituto"},
  {exib : 'Atendimentos',
  link: "/#atendimentos"},
  {exib : 'Contato',
  link: "/#contato"},
  {exib : 'Transparência',
  link: "/transparencia"}
]

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
      <Container maxWidth="lg"  >
      <AppBar sx={{backgroundColor: 'white', position: 'fixed', top: 0, width: '100%'}}>
        <Toolbar disableGutters>        

          <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
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
                display: { xs: 'block', md: 'none' } 
              }}
            > 
              {pages.map((page) => (
                <a href={page.link}><MenuItem key={page.exib} onClick={handleCloseNavMenu}>
                  <Typography sx={{px: 4, py: 2, fontSize : 'large' }}>{page.exib.toUpperCase()}</Typography>
                </MenuItem></a>
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
          
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'space-between', mx:8}}>
        
        <Typography><img height="80px" src={Logo} /></Typography>
        <Box sx={{ display:'flex'}}>
          {pages.map((page) => (
            <a href={page.link}><Button
            key={page.exib}
            onClick={handleCloseNavMenu}
            sx={{ my: 1, px:3, color: 'black', display: 'block' }}
            >
              {page.exib}
            </Button></a>
          ))}
        </Box>
        <Box sx={{display: 'flex', pt: 3}}>          
            <Typography >
              <a href="https://www.instagram.com/institutosercomamor/"><Instagram fontSize='large' sx={{ mr: 2}} color='primary'/></a>
              <a href="https://www.facebook.com/institutosercomamor/"><Facebook fontSize='large' color='primary'/></a>             
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
              {pages.map((page) => (
                <a href={page.link}>
                  <MenuItem key={page.exib} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{page.exib}</Typography>
                </MenuItem></a>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        </AppBar>
      </Container>

    <Box sx={{height: { xs : '80px', md:  '100px'}}}/>
    </ThemeProvider>
  );
}
export default NavigationBar;