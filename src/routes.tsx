import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Rural from './pages/Rural'
import Cidade from './pages/Cidade'
import Distrito from './pages/Distrito'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/rural" element={<Rural />} />
    <Route path="/cidade" element={<Cidade />} />
    <Route path="/distrito" element={<Distrito />} />
  </Routes>
)

export default Rotas
