import {Container, Profile } from './styles'

export function Header() {

  return(
    <Container>
      <Profile>
      <img src='https://github.com/mullerhub.png'
      alt='foto do usuario'
       />
       <div>
        <span>Bem vindo</span>
        <strong>Murilo Muller</strong>
       </div>
      </Profile>
    </Container>
  )
}
