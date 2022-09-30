import { Container, Perfil } from './styles'

export function Header() {
  return (

    <Container>
      <h1>RocketMovies</h1>
      <input placeholder='Pesquisar pelo titulo' />
      <div>
        <div>
          <strong>Murilo Muller</strong>
          <a>Sair</a>
        </div>

        <a>
          <Perfil src='https://www.github.com/mullerhub.png'></Perfil>
        </a>
      </div>
    </Container>
  )
}