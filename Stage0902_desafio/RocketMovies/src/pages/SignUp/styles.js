import styled from 'styled-components'
import backgroundImg from '../../assets/rocketMovie.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.BUTTON};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
    display: flex;
    align-items: flex-end;
    width: 100%;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 84px;
    color: ${({ theme }) => theme.COLORS.BUTTON};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.7;
`
