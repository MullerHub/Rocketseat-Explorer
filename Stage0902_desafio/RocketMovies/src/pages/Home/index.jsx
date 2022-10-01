import { Container, Teste } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Home() {
  return (
    <Container>
      <Header />
      <div>
        <h1>Meus filmes</h1>
        <Button />
      </div>

    </Container>
  )
}