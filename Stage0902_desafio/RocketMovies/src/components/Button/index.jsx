import { Container } from './styles'

export function Button({ children }) {
  return (
    <Container>
      <button>
        {children}
      </button>
    </Container>
  )
}