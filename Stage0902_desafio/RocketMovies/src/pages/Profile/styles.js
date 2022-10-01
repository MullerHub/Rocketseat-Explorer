import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    width: 100%;
    height: 144px;
    display: flex;
    align-items: center;
    padding: 0 58px;
    background-color: ${({ theme }) => theme.COLORS.BUTTON_BG};
  }
`

export const Form = styled.form`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Avatar = styled.div`
  width: 100%;
`
