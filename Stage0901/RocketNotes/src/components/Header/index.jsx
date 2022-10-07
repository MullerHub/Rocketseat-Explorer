import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut } = useAuth()

  return (
    <Container>
      <Profile to="/profile">
        <img src='https://github.com/mullerhub.png'
          alt='foto do usuario'
        />
        <div>
          <span>Bem vindo</span>
          <strong>Murilo Muller</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        {console.log("test")}
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
