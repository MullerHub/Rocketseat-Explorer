import { Container, Form } from './styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState([])

  function handleAddLinks() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter())
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input placeholder="Titulo" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis" >
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => { }}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo links"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLinks}
            />

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
