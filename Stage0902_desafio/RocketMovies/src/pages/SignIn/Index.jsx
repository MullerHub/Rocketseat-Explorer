import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Background, Container, Form } from './styles'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" />
        <Input placeholder="Senha" type="password" />
        <Button title="Entrar" />

        {/*
        <Link to="/register">Criar conta</Link> 
        */}
      </Form>
      <Background />
    </Container>
  )
}
