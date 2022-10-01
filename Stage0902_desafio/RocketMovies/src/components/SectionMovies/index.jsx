import { Input } from '../Input'
import { Container } from './styles'
import { BiSearchAlt2 } from 'react-icons/bi'

export function SectionMovies({ title, subtitle, value, ...rest }) {
  return (

    <Container>
      <header>
        <h1>{title}</h1>

        <section>
          <BiSearchAlt2 />
          <BiSearchAlt2 />
          <BiSearchAlt2 />
          <BiSearchAlt2 />
          <BiSearchAlt2 />
        </section>
      </header>

      <p>{subtitle}</p>


      <div>
        <Input placeholder="Nome de usuario" type="text" />
        <Input placeholder="Nome de usuario" type="text" />
        <Input placeholder="Nome de usuario" type="text" />
      </div>
    </Container>
  )
}