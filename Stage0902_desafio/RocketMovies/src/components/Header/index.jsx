import { Container, Perfil } from './styles'

export function Header() {
  return (

    <Container>
      <h1>RocketMovies</h1>
      <input />
      <strong>Murilo Muller</strong>
      <span>Sair</span>
      <a>
        <Perfil src='https://www.github.com/mullerhub.png'></Perfil>
      </a>
    </Container>
  )
}