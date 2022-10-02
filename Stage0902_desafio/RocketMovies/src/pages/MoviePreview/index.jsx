import { Container, Section } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { MdOutlineWatchLater } from 'react-icons/md'
import { Link } from 'react-router-dom'

export function MoviePreview() {
  return (
    <Container>
      <Header />
      <Section>
        <div>
          <Link to="/"> ⏎ Voltar</Link>

          <div>
            <h1>A loucademia de policia 2</h1>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
          </div>
          <div>
            <img src='https://github.com/mullerhub.png' />
            <p>Por Murilo Muller</p>
            <MdOutlineWatchLater />
            <p>01/10/2022 às 19:00</p>
          </div>
        </div>

        <section>
          <div>
            <Button title="texto" />
            <Button title="tt" />
            <Button title="TexXxto grandão enorme, gigante" />
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quis cupiditate modi distinctio natus, debitis, dolorum sed, totam ut sequi quas praesentium. Sequi magni consequatur libero? Sit laudantium optio saepe.
            Laboriosam debitis aliquam autem! Neque ad reiciendis similique ullam illo adipisci vero? Assumenda corporis consectetur modi non iusto. Vel earum, voluptates dolorum facere debitis labore non ullam quis libero laborum!
            Reiciendis mollitia fuga perspiciatis incidunt illo suscipit, cumque officiis nostrum dolore totam deserunt quibusdam, officia minima atque at ratione corrupti, debitis asperiores perferendis dicta aliquid numquam! Assumenda quia voluptatibus iste.
            Dolore culpa, quisquam excepturi doloremque, optio est cupiditate tempore sit natus iure deleniti consequuntur minima saepe voluptates nesciunt magni ullam selectus id lolita, possimus accusamus atque. Rerum ex labore dicta!</p>
        </section>

      </Section >
    </Container >
  )
}
