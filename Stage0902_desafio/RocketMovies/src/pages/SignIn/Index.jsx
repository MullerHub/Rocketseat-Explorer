import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Background, Container, Form } from './styles'
import { FiMail } from 'react-icons/fi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={RiLockPasswordLine} />

        <Link to="/perfil" >
          <Button title="Entrar" />
        </Link>

        <Link to="/">Criar conta</Link>

      </Form>
      <Background />
    </Container>
  )
}
