import Dashboard from './Pages/Admin/Dashboard'
import Login from './Pages/Admin/Login'
import {BrowserRouter, Route, Routes,} from 'react-router-dom'

export default function AppRouter() {
  return(
  <BrowserRouter>
    <Routes>
    <Route path="/admin/dash" element={<Dashboard/>} />
      <Route path="/admin/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
  )
}