import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'newnote contet';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Brand = styled.div`
  width: 100%;
`

export const Menu = styled.ul`
  width: 100%;
`

export const Search = styled.ul`
  width: 100%;
`

export const Content = styled.div`
  width: 100%;
`

export const NewNote = styled.button`
  width: 100%;
`
