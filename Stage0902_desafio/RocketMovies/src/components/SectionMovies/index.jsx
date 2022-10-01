import { Button } from '../Button'
import { Container } from './styles'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

export function SectionMovies({ title, subtitle, value, ...rest }) {
  return (

    <Container>
      <header>
        <h1>{title}</h1>

        <section>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
        </section>
      </header>

      <p>{subtitle}</p>


      <div>
        <Button title="Nome de usuario" type="text" />
        <Button title="ana" type="text" />
        <Button title="kim" type="text" />
        <Button title="Nome de usuario gigantão" type="text" />
      </div>
    </Container>
  )
}