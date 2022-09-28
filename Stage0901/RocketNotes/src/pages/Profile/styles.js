import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;
`

export const Avatar = styled.div`
  width: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`
