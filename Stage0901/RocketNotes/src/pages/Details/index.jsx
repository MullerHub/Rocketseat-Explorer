import {Container} from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'



export function Details() {

  return(
    <Container >
      <Header/>
      <Section title="Links úteis" >
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Section>
      <Button title="Voltar" />
    </Container >
  )
}