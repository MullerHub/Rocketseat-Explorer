import styled from 'styled-components'
import { theme } from '../../pages/styles/theme'

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`
