import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalCss, { Div, Fundo } from './styles'
import Header from './components/Header'
import Rotas from './routes'

function App() {
  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
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
