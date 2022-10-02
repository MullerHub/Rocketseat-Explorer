import { Button } from '../Button'
import { Container } from './styles'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export function SectionMovies({ title, subtitle, value, ...rest }) {
  return (

    <Container>
      <header>
        <Link to="/filme">
          <h1>{title}</h1>
        </Link>

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