import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 55px;
  background-color: ${({ theme }) => theme.COLORS.BUTTON};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 10px;
  font-weight: 500;
  padding: 0 16px;
  display: flex;
  border: none;

  &:disabled {
    opacity: 0.5;
  }
`
