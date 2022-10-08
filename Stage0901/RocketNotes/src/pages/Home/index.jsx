import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { useState, useEffect } from 'react'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { ButtonText } from '../../components/ButtonText'
import { api } from '../../services/api'

export function Home() {
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])

  function handleTagSelected(tagName) {
    setTagsSelected([tagName])
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data)
    };

    fetchTags()
  }, []);
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />
      <Menu>
        <li>
          <ButtonText title="Todos temporario" isActive />
        </li>
        <ButtonText title="Nada temporario" />
        {/* Nunca vi tanto erro */}
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)} >
              <ButtonText title={tag.name} />
            </li>
          )
          )
        }

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: 'React',
              tags: [
                { id: '1', name: 'react' },
                { id: '2', name: 'node' },
                { id: '3', name: 'ana' },
                { id: '4', name: 'kim' },
                { id: '5', name: 'sky' },
                { id: '6', name: 'walker' }
              ]
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container >
  )
}
