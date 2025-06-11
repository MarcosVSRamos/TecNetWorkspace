import GlobalCss, { Div, Fundo } from './styles'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Fundo />
      <Div>
        <Header />
        <Rotas />
      </Div>
    </BrowserRouter>
  )
}

export default App
