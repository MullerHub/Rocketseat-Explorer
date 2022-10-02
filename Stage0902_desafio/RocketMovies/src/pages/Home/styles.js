import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > div {
    display: flex;
    padding: 10px 90px;
    justify-content: space-between;

    button {
      max-width: 100%;
    }
  }
`
