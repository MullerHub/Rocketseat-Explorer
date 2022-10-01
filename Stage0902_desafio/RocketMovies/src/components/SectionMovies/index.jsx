import { Input } from '../Input'
import { Container } from './styles'

export function SectionMovies({ title, subtitle, value, ...rest }) {
  return (

    <Container>
      <header>
        {title}

        <img src="https://github.com/MullerHub.png" alt="" />
      </header>

      <p>{subtitle}</p>

      <Input placeholder="Nome de usuario" type="text" />

    </Container>
  )
}