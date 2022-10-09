import { Container, Form } from './styles'
import { useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function New() {

  const [title, setTitle] = useState([])
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
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

  async function handleNewNote() {

    if (newTag) {
      return alert("Você deixou uma tag sem adicionar, adicione se quiser")

    }

    if (newLink) {
      return alert("Você deixou um link sem adicionar, adicione se quiser")
    }


    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("Nota criada com sucesso!")
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form
          onSubmit={handleNewNote}
        >
          <header>
            <h1>Criar nota</h1>
            <ButtonText
              title="Voltar"
              onClick={handleBack}
            />
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
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>

    </Container>
  )
}
