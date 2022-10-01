import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 0 15px;

  > input {
    height: 56px;
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    padding: 12px;
    border: 0;

    &:placeholder {
      color: ${({ theme }) =>
        theme.COLORS.RED}; // ARRUMAR PARA GRAY_300 QUANDO POSSIVEL
    }
  }
`
