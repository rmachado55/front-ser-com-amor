import { PrivateRoute } from 'Components/PrivateRoute'
import Admin from './Pages/Admin'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { useState } from 'react'
import { Diretoria } from 'Pages/Admin/Diretoria'

export default function AppRouter ()
{

  const [ auth, setAuth ] = useState( false )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login setAuth={ setAuth } /> } />

        <Route path="/admin/" element={
          <PrivateRoute auth={ auth }>
            <Admin />
          </PrivateRoute>
        }/>        
        

      </Routes>
    </BrowserRouter>
  )
}