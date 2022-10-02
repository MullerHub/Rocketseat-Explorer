import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin: 32px;
  gap: 50px;

  background-color: ${({ theme }) => theme.COLORS.BUTTON_BG_1};
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  > header {
    gap: 10px;
    margin: 32px 0;
    display: flex;
    width: 217px;
    height: 32px;
    flex-direction: column;

    a {
      color: white;
    }

    a:hover {
      opacity: 0.7;
    }

    h1 {
      white-space: nowrap;
      font-weight: 700;
    }

    section {
      max-width: 100%;
      display: flex;
      gap: 5px;

      svg {
        fill: pink;
      }
    }
  }

  p {
    white-space: var(3, 15);
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    font-weight: 400;

    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    text-align: justify;
  }

  > div {
    display: flex;
    gap: 10px;
    max-width: 100%;
    margin-bottom: 32px;

    button {
      max-width: 100%;
      height: 34px;

      text-transform: uppercase;
      border-radius: 10px;

      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
