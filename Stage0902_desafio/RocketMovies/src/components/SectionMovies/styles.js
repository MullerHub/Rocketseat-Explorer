import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.COLORS.BUTTON_BG};
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  gap: 50px;

  > header {
    display: flex;
    width: 217px;
    height: 32px;
    flex-direction: column;

    section {
      display: flex;
    }
  }

  p {
    background-color: black;
  }

  > div {
    display: flex;
    border: 10px solid green;

    div {
      max-width: 100%;
      border: 2px solid red;
    }
  }
`
