import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > header {
    height: 144px;
    display: flex;
    align-items: center;
    padding: 0 58px;
    background-color: ${({ theme }) => theme.COLORS.BUTTON_BG};
  }
`
