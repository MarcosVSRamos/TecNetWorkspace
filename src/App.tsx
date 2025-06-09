import GlobalCss from './styles'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
