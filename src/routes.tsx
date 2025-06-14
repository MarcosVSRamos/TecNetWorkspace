import { Route, Routes, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Rural from './pages/Rural'
import Cidade from './pages/Cidade'
import Distrito from './pages/Distrito'
import Login from '../src/components/Login'
import { useAuth } from './components/AuthContext'

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? element : <Navigate to="/" />
}

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<PrivateRoute element={<Home />} />} />
    <Route path="/rural" element={<PrivateRoute element={<Rural />} />} />
    <Route path="/cidade" element={<PrivateRoute element={<Cidade />} />} />
    <Route path="/distrito" element={<PrivateRoute element={<Distrito />} />} />
  </Routes>
)

export default Rotas
