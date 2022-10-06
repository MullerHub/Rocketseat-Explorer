import { useState } from 'react'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Background, Container, Form } from './styles'
import { api } from '../../services'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignUp() {

    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("users", { name, email, password }).then(() => {
      alert("usuario cadastrado")
    })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possivel cadastrar")
        }
      })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text" icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password" icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <button
          title="Cadastrar" type='button' onClick={handleSignUp} />


        <Link to="/" >Voltar para o login </Link>
      </Form>
    </Container>
  )
}
