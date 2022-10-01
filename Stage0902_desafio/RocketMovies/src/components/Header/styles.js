import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 116px;

  gap: 64px;
  padding: 0px 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    display: flex;
    align-items: center;

    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.BUTTON};
  }

  > div + div {
    width: 250px;
    max-height: 100%;

    display: flex;
    gap: 20px;

    align-items: center;
  }
`

export const Section = styled.section`
  max-width: 236px;
  display: flex;
  align-items: center;
  gap: 8px;

  div {
    max-width: 70%;

    display: flex;
    align-items: flex-end;
    flex-direction: column;
    p {
      display: flex;
      white-space: nowrap;
      overflow: hidden;
    }

    > a {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`

export const Perfil = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`
