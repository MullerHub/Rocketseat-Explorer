import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
