import { Input } from '../Input'
import { Container } from './styles'

export function SectionMovies({ title, value, ...rest }) {
  <Container>
    <header>
      {title}

      <img src="https://github.com/MullerHub.png" alt="" />
    </header>

    <p>{subtitle}</p>

    <Input />

  </Container>
}