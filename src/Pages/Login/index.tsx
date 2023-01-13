import { Dispatch, SetStateAction, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginService from 'Services/Login';
import { useNavigate } from 'react-router-dom';
import { themeHome } from 'Themes/Home';

const theme = createTheme();

export default function Login ( props: { setAuth: React.Dispatch<React.SetStateAction<boolean>> } )
{

  const [ email, setEmail ] = useState( 'teste@teste' )
  const [ password, setPassword ] = useState( 'teste' )
  const navigate = useNavigate()

  const handleSubmit = async ( event: React.FormEvent<HTMLFormElement> ) =>
  {
    event.preventDefault();
    try
    {
      const user = await LoginService.login( { email: email, senha: password } );
      props.setAuth( true )
      navigate( "/admin/" )
    } catch ( error )
    {
      alert( 'Login ou Senha incorretos' )
    }


  };

  return ( <>


    <ThemeProvider theme={ themeHome }>
      <Container sx={{ my : 11}} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={ {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }
        >
          <Avatar sx={ { m: 1, bgcolor: 'red' } }>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Área Administrativa
          </Typography>
          <Box component="form" onSubmit={ handleSubmit } noValidate sx={ { mt: 1 } }>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail cadastrado"
              name="email"
              value={ email }
              onChange={ ( event ) => setEmail( event.target.value ) }
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={ password }
              onChange={ ( event ) => setPassword( event.target.value ) }
            />
       
            <Button
              type="submit"
              fullWidth
              variant="contained"              
              sx={ { mt: 3, mb: 2 } }
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
            </Grid>
          </Box>
        </Box>      
      </Container>
    </ThemeProvider>
  </>
  );
}