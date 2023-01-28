import { PrivateRoute } from 'Components/PrivateRoute'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { useState } from 'react'
import Home from 'Pages/Visitors/Home'
import Visitors from 'Pages/Visitors'
import { ThemeProvider } from '@emotion/react'
import { themeHome } from 'Themes/Home'
import Transparencia from 'Pages/Visitors/Transparencia'


export default function AppRouter ()
{

  const [ auth, setAuth ] = useState( false )

  return ( <>
    <ThemeProvider theme={ themeHome }>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Visitors /> }>
            <Route index element={ <Home /> } />
            <Route path='login/' element={ <Login setAuth={ setAuth } /> } />
            <Route path='transparencia/' element={ <Transparencia/>} />
          </Route>
          
         


        </Routes>

      </BrowserRouter>

    </ThemeProvider>
  </>
  )
}