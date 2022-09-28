import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">Voltar</a>
          </header>
          <Input placeholder="Titulo" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis" >
            <NoteItem value="www.instagram.com/dj.muller_" />
            <NoteItem isNew placeholder="Novo Link" />
          </Section>

          <Section title="Marcadores" >
            <div className='tags'>
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo Link" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>

    </Container>
  )
}
