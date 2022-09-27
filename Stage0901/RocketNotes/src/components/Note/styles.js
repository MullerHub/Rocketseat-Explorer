import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
  }
`
