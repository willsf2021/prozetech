import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;

  img {
    height: 85px;
  }
  p {
    line-height: 1.6rem;
  }
  h3 {
    min-width: 300px;
  }
  h3,
  p {
    max-width: 400px;
  }
`;
