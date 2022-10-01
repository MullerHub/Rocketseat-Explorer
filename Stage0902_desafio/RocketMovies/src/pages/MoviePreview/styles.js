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

  p {
    text-align: justify;
  }

  > div {
    border: 2px solid yellow;

    div {
      display: flex;
      align-items: center;
    }
  }
`
