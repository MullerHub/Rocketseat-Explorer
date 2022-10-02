import { Input } from '../Input'
import { Container, Perfil, Section } from './styles'
import { BiSearchAlt2 } from 'react-icons/bi'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo titulo" icon={BiSearchAlt2} />

      <Section>
        <div>
          <p>Murilo da Silva</p>
          <a>Sair</a>
        </div>

        <a>
          <Perfil src='https://www.github.com/mullerhub.png'></Perfil>
        </a>
      </Section>
    </Container>
  )
}