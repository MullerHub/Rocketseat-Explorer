import { Container, Content, Marcadores, Form } from './styles'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/TextArea'

export function CreateMovie() {
  return (
    <Container>
      <Form>

        <Header />
        <i> Voltar</i>

        <Content>
          <div>
            <Input placeholder="teste" type="text" />
            <Input placeholder="teste 123" type="text" />
          </div>
          <Textarea placeholder="Testando" />
        </Content>

        <Marcadores>
          <h2>Marcadores</h2>

          <div>
            <Button title="React" icon={AiOutlineClose} />
            <Button title="Novo marcador" icon={AiOutlinePlus} />
          </div>
        </Marcadores>


        <footer>
          <Button title="Exccluir filme" />
          <Button title="Salvar alterações" />
        </footer>
      </Form >
    </Container>

  )
}
