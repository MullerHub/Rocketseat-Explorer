import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 116px;
  // background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: blue;
`
export const Perfil = styled.img`
  width: 45px;
  height: 45px;

  > img {
    max-width: 100%;
    background-color: red;
  }
`
