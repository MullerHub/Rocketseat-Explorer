import { Container, Teste } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { FiMail } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header />
      <div>
        <h1>Meus filmes</h1>
        <Button icon={FiMail} title="Adicionar filme" />
      </div>

    </Container>
  )
}