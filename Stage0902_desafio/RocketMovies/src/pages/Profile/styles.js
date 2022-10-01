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

  margin: 50px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div:nth-child(4) {
    background-color: blue;
    margin-top: 20px;
  }

  > button {
    margin-top: 20px;
  }
`

export const Avatar = styled.div`
  width: 100%;
  position: relative;
  margin: -75px auto 32px;
  width: 150px;
  height: 150px;

  > img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }

  > label {
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.COLORS.BUTTON};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
  }

  input {
    display: none;
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
`
