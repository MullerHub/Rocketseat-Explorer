import { Input } from '../Input'
import { Container } from './styles'
import { FiMail } from 'react-icons/fi'

export function SectionMovies({ title, subtitle, value, ...rest }) {
  return (

    <Container>
      <header>
        <h1>{title}</h1>

        <section>
          <FiMail />
          <FiMail />
          <FiMail />
          <FiMail />
          <FiMail />
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