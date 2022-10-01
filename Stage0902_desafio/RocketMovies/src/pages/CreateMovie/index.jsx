import { Container, Content, Marcadores } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { Textarea } from '../../components/TextArea'

export function CreateMovie() {
  return (
    <Container>
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
    </Container>
  )
}
