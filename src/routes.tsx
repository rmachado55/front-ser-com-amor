import { PrivateRoute } from 'Components/PrivateRoute'
import Dashboard from './Pages/Admin/Dashboard'
import Login from './Pages/Admin/Login'
import {BrowserRouter, Route, Routes,} from 'react-router-dom'
import { useState } from 'react'

export default function AppRouter() {
  
  const [auth, setAuth] = useState(false)
  
  return(
  <BrowserRouter>
    <Routes>
    
      <Route path="/admin/login" element={<Login setAuth={setAuth}/>} />
      
      <Route path="/admin/dash" element={
        <PrivateRoute auth={auth}>
          <Dashboard setAuth={setAuth}/>
        </PrivateRoute>
      } />

      
    </Routes>
  </BrowserRouter>
  )
}