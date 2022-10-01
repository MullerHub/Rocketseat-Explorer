import { Form } from 'react-bootstrap'
import { Container } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'


export function Profile() {
  return (
    <Container>
      <heade>
        <FiArrowLeft />
        <a >Voltar</a>
      </heade>

      <Form>
        <img src="https://www.github.com/mullerhub.png" alt="Foto do usuario" />
        <FiCamera />

        <Input placeholder="Nome de usuario" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="mail" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />

        <Button title="Salvar" />

      </Form>

    </Container>
  )
}