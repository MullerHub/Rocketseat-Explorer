import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > div {
    border-top: 2px solid blue;
    display: flex;
    padding: 10px 90px;
    justify-content: space-between;

    button {
      max-width: 100%;
    }
  }
`

export const Teste = styled.section`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.COLORS.BUTTON_BG};
`
