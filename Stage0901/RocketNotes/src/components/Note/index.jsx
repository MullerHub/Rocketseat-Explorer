import { Container } from './styles'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      {data.tags && (
        <footer>
          {data.tags.map(tag => {
            ;<span key={tag.id}>{tag.name}</span>
          })}
        </footer>
      )}
    </Container>
  )
}
