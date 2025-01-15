import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 80px;
  row-gap: 24px;
  div.container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    column-gap: 128px;
    div.image {
      flex: 1;
      max-width: 320px;
      img {
        width: 100%;
      }
    }

    div.text {
      flex: 1;
      display: flex;
      flex-direction: column;
      row-gap: 24px;
      justify-content: center;
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
