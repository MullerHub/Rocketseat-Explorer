import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin: 30px 90px;
  background-color: ${({ theme }) => theme.COLORS.BUTTON_BG_1};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  > header {
    gap: 10px;
    margin-bottom: 20px;
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
    overflow: hidden;
    white-space: pre-wrap;
    text-overflow: ellipsis;
  }

  > div {
    display: flex;
    gap: 10px;
    max-width: 100%;
    border: 10px solid green;

    button {
      max-width: 100%;
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
