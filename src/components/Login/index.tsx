import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import { Div, Form } from './styles'
import logo from '../../assets/images/logo_dois.jpg'

const Login = () => {
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/menu" />
  }

  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (nome === 'ubnt' && senha === 'tec2129') {
      const sucesso = login(senha) // login deve retornar true/false
      if (sucesso) {
        navigate('/menu')
      } else {
        alert('Erro ao autenticar.')
      }
    } else {
      alert('Usuário ou senha inválidos')
    }
  }

  return (
    <Div className="container">
      <img src={logo} />
      <Form onSubmit={loginSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </Form>
    </Div>
  )
}

export default Login
