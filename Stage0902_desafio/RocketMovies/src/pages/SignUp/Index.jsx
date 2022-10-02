import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Background, Container, Form } from './styles'
import { FiMail } from 'react-icons/fi'
import { BiArrowBack } from 'react-icons/bi'
import { RiLockPasswordLine, RiUserStarFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={RiUserStarFill} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={RiLockPasswordLine} />
        <Button title="Cadastrar" to="/" />

        <Link to="/login" /* icon={BiArrowBack} */ >Voltar para o login</Link>
      </Form>
      <Background />
    </Container>
  )
}
