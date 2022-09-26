import styled from 'styled-components'

export const Container = styled.section`
  margin: 56px 0 28px;

  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`
