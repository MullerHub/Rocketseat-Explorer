import styled from 'styled-components'

export const Container = styled.button`
  max-width: 100%;
  gap: 10px;
  height: 55px;
  background-color: ${({ theme }) => theme.COLORS.BUTTON};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 10px;
  font-weight: 500;
  padding: 0 16px;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
  }
`
