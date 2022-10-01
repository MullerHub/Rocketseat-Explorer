import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

export const Section = styled.section`
  width: 100%;
  height: 100%;
  margin: 30px 0 20px 0;
  padding: 20px 120px 150px 120px;

  > div {
    margin-bottom: 30px;

    a {
      display: flex;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.COLORS.BUTTON};
    }

    div {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        fill: ${({ theme }) => theme.COLORS.BUTTON};
      }

      img {
        width: 20px;
        border-radius: 50%;
        height: 20px;
      }
      h1 {
        margin: 10px 0;
      }
    }
  }
  > section {
    div {
      display: flex;
      gap: 15px;
      margin-bottom: 20px;

      button {
        background: #282124;
        color: white;
        height: 35px;

        text-transform: uppercase;
        font-size: 70%;
      }
    }

    p {
      text-align: justify;
    }
  }
`
