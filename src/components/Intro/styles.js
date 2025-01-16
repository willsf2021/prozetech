import styled from "styled-components";

export default styled.section`
  div.wrap {
    display: flex;
    flex-direction: column;
    row-gap: 48px;
  }
  div.container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    column-gap: 128px;
    div.image {
      flex: 1;
      max-width: 440px;
      img {
        width: 100%;
      }
    }

    div.text {
      flex: 1;
      display: flex;
      flex-direction: column;
      row-gap: 40px;
      justify-content: center;
      p {
        line-height: 2rem;
      }
      /* max-width: 400px; */
    }
    button {
      max-width: fit-content;
    }
  }

  button span {
    border-bottom: 1px solid ${({ theme }) => theme.colors.snow};
  }
`;
