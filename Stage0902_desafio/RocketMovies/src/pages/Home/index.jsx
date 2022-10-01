import { Container, Teste } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { FiMail } from 'react-icons/fi'
import { SectionMovies } from '../../components/SectionMovies'

export function Home() {
  return (
    <Container>
      <Header />
      <div>
        <h1>Meus filmes</h1>
        <Button icon={FiMail} title="Adicionar filme" />
      </div>

      <SectionMovies title="teste" input="teste" > <p>lkkkkk</p></SectionMovies>


    </Container>
  )
}