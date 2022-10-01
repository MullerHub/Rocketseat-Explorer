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

    h1 {
      white-space: nowrap;
    }

    section {
      background-color: red;
      max-width: 100%;
      gap: 5px;
      display: flex;
    }
  }

  p {
    background-color: black;
  }

  > div {
    display: flex;
    gap: 10px;
    max-width: 100%;
    border: 10px solid green;

    div {
      max-width: 100%;
      border: 2px solid red;
    }
  }
`
