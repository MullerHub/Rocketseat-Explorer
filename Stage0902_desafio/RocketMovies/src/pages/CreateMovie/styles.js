import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > footer {
    display: flex;
    width: 100%;
    gap: 40px;
  }
`
export const Content = styled.section`
  width: 100%;
  > div {
    display: flex;
    gap: 20px;
  }
`

export const Marcadores = styled.section`
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  > div {
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    svg {
      color: ${({ theme }) => theme.COLORS.BUTTON};
    }

    gap: 5px;

    button {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button + button {
      background-color: transparent;
      border: 2px dotted gray;
    }
  }
`
