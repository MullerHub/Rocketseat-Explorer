import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`

export const Form = styled.form`
  max-width: 100%;
  margin: 40px 123px;

  a {
    color: ${({ theme }) => theme.COLORS.BUTTON};
  }

  footer {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 10px;

    button {
      width: 50%;
    }
    button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_990};
      color: ${({ theme }) => theme.COLORS.BUTTON};
    }
  }
`

export const Content = styled.section`
  width: 100%;

  > h1 {
    margin: 30px 0;
  }
  > div {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
  }

  textarea {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};
  }
`

export const Marcadores = styled.section`
  h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin: 30px 0 15px 0;
  }

  > div {
    padding: 10px 30px;
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_990};
    width: 100%;
    border-radius: 15px;
    margin-bottom: 30px;
    svg {
      color: ${({ theme }) => theme.COLORS.BUTTON};
    }

    gap: 5px;

    button {
      margin: 10px 0;
      height: 35px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button + button {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      background-color: transparent;
      border: 2px dotted gray;
    }
  }
`
