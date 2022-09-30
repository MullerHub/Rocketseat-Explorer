import styled from 'styled-components'

export const Container = styled.div`
  padding: 1vw;
  width: 100%;
  height: 116px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: 20px;
    }
  }
`
export const Perfil = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`
