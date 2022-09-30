import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.BUTTON_BG};
  position: absolute;
  z-index: 1;
`

export const Teste = styled.section`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.COLORS.BUTTON_BG};
`
