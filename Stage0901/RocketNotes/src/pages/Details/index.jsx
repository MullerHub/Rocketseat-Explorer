import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            voluptatem fugiat dolores. Recusandae dolor quo quas libero, illum
            sequi, accusantium, fugit dolore ipsam delectus laudantium nulla
            nam! Itaque, quia non.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://www.instagram.com/dj.muller_">MullerHub</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
