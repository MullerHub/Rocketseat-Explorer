import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > a {
    width: 1000px;
    background-color: blue;
  }
`
