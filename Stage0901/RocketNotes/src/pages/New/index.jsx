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

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewLTag] = useState("")

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewLTag("")
  }

  function handleAddLinks() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(linkDeleted) {
    setLinks(prevState => prevState.filter(link => link !== linkDeleted))
  }

  function handleRemoveTag(tagDeleted) {
    setTags(prevState => prevState.filter(link => link !== tagDeleted))
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
          <Input
            placeholder="Titulo"
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}

          />

          <Section title="Links úteis" >
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
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
              {
                tags.map((tag, index) => {
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                })
              }

              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={e => setNewLTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>

    </Container>
  )
}
