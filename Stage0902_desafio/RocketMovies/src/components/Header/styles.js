import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 116px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  gap: 64px;

  > h1 {
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.BUTTON};
  }

  > div + div {
    width: 250px;
    max-height: 100%;
    display: flex;
    gap: 20px;
    align-items: center;

    border: 2px solid green;

    > div {
      max-width: 100px;
      display: flex;
      align-items: flex-end;
      flex-direction: column;

      > p {
        max-width: 100px;
        display: flex;
        white-space: nowrap;
        overflow: hidden;
      }

      > a {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
    }
  }
`
export const Perfil = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`
