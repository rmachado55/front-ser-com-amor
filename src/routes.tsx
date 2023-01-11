import { PrivateRoute } from 'Components/PrivateRoute'
import Admin from './Pages/Admin'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { useState } from 'react'
import Home from 'Pages/Visitors/Home'
import NavigationBar from 'Pages/Visitors/NavigationBar'
import Footer from 'Pages/Visitors/Footer'
import Visitors from 'Pages/Visitors'
import { ThemeProvider } from '@emotion/react'
import { themeHome } from 'Themes/Home'
import { NossoBlog } from 'Pages/Visitors/NossoBlog'

export default function AppRouter ()
{

  const [ auth, setAuth ] = useState( false )

  return ( <>
    <ThemeProvider theme={ themeHome }>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Visitors /> }>
            <Route index element={ <Home /> } />
            <Route path='blog' element={ <NossoBlog /> } />
          </Route>
          <Route path='login/' element={ <Login setAuth={ setAuth } /> } />
          <Route path='admin/' element={ <PrivateRoute auth={ auth }>
            <Admin />
          </PrivateRoute> } />


        </Routes>

      </BrowserRouter>

    </ThemeProvider>
  </>
  )
}