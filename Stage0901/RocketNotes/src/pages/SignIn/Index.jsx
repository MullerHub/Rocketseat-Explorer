import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'

import { Container, Form } from './styles'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>
      </Form>

      <Input placeholder="E-mail" type="text" icon={FiMail} />
      <Input placeholder="Senha" type="password" icon={FiLock} />
      <Button title="Entrar" />
    </Container>
  )
}
