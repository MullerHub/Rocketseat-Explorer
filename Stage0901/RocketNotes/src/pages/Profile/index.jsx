import { Container, Form, Avatar } from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../assets/user.svg'
import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)


  function handleBack() {
    navigate(-1)
  }

  async function handleUpdate(e) {
    e.preventDefault()
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }
    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <button
          to="/"
          onClick={handleBack}
        >
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          <img
            src={avatar}
            alt="Foto de perfil"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}

        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}

        />


        <Button
          title="Salvar"
          type="button"
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  )
}
