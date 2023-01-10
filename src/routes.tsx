import { PrivateRoute } from 'Components/PrivateRoute'
import Admin from './Pages/Admin'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { useState } from 'react'
import Home from 'Pages/Home'
import NavigationBar from 'Pages/Home/NavigationBar'
import Footer from 'Pages/Home/Footer'

export default function AppRouter ()
{

  const [ auth, setAuth ] = useState( false )

  return (<>  

    <BrowserRouter>      
    <NavigationBar/>
    <Routes>
        <Route path='/' index element={<Home/>} />      
    </Routes>
    <Footer/>
      <Routes>
        <Route path="/login" element={ <Login setAuth={ setAuth } /> } />
          <Route path="/admin/" element={
            <PrivateRoute auth={ auth }>
              <Admin />
            </PrivateRoute>
          }/>  
      </Routes>
    </BrowserRouter>
    </>
  )
}