import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  padding: 10px;

  color: ${({ theme }) => theme.COLORS.WHITE};
`
