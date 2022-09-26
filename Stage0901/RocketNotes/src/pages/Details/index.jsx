import {Container, Links} from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {

  return(
    <Container >
      <Header/>
      <Section title="Links úteis" >
        <Links>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </Links>
      </Section>
      <Section title="Marcadores" >
      <Tag title="express" />
      <Tag title="node" />
      </Section>

      <Button title="Voltar" />
    </Container >
  )
}