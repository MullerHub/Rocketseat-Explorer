import { Container } from './styles'
import { FiArrowLeft } from 'react-icons/fi'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>
    </Container>
  )
}
