// App.tsx

import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider, useAuth } from './components/AuthContext'

import GlobalCss, { Div, Fundo } from './styles'
import Header from './components/Header'
import Rotas from './routes'

function AppContent() {
  const { isAuthenticated } = useAuth()

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
    <>
      <GlobalCss />
      <Fundo />
      <Div>
        {isAuthenticated && <Header />}
        <Rotas />
      </Div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
