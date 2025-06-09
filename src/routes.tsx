import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Rural from './pages/Rural'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/rural" element={<Rural />} />
  </Routes>
)

export default Rotas
