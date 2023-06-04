import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './Pages/Visitors/Home'
import Visitors from './Pages/Visitors'
import { ThemeProvider } from '@emotion/react'
import { themeHome } from './Themes/Home'
import Transparencia from './Pages/Visitors/Transparencia'


export default function AppRouter ()
{
  return ( <>
    <ThemeProvider theme={ themeHome }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Visitors /> }>
            <Route index element={ <Home /> } />
            <Route path='transparencia/' element={ <Transparencia /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
  )
}