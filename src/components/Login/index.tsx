import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import { Div, Form } from './styles'
import logo from '../../assets/images/logo_dois.jpg'

const Login = () => {
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (nome === 'ubnt' && senha === 'tec2129') {
      login()
      navigate('/home')
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
