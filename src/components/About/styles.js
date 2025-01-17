import styled from "styled-components";

export default styled.section`
  div.contain {
    flex: 1;
    position: relative;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    row-gap: 48px;
    p {
      font-weight: 400;
      line-height: 2rem;
      margin-top: 8px;
    }
    img {
      position: absolute;
      top: 56px;
      right: -56px;
      z-index: -1;
    }
  }
`;
