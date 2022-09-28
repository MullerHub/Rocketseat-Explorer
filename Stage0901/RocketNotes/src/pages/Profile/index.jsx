import { Container } from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'

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
