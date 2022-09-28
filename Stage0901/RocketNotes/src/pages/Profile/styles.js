import styled from 'styled-components'
import Image from '../../assets/linus.jpeg'

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
  position: relative;
  margin: 0 auto 32px;
  width: 186px;
  height: 186px;

  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: orange;
    border-radius: 50%;

    position: absolute;
    bottom: 7px;
    right: 7px;
  }

  input {
    display: none;
  }
`
