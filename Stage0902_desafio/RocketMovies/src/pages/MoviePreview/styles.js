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
  border: 2px solid green;
  padding: 20px 120px 150px 120px;

  > div {
    border: 2px solid yellow;
    margin-bottom: 30px;

    div {
      display: flex;
      align-items: center;
      gap: 10px;

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
    border: 2px solid red;

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
