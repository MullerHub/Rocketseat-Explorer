import { Input } from '../Input'
import { Container, Perfil, Section } from './styles'
import { BiSearchAlt2 } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo titulo" icon={BiSearchAlt2} />

      <Section>
        <div>
          <p>Murilo da Silva</p>
          <Link to="/register">Sair</Link>
        </div>

        <Link to="/perfil">
          <Perfil src='https://www.github.com/mullerhub.png'></Perfil>
        </Link>
      </Section>
    </Container>
  )
}