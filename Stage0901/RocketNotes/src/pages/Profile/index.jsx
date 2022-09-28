import { Container } from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Form } from 'react-bootstrap'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form></Form>
    </Container>
  )
}
