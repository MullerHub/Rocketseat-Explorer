import {Container} from './styles'

export function ButtonText({ title, ...rest}){
  return(
    <Container>
      {title}
    </Container>
  )
}