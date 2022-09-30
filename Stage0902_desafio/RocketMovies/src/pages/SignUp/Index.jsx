import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Background, Container, Form } from './styles'

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" />
        <Input placeholder="E-mail" type="text" />
        <Input placeholder="Senha" type="password" />
        <Button title="Cadastrar" />

        <Link to="/" >Voltar para o login</Link>
      </Form>
    </Container>
  )
}
