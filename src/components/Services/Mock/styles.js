import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  img {
    height: 85px;
  }
  p {
    margin-top: 16px;
    
  }
  h3 {
    min-width: 300px;
  }
  h3, p {
    max-width: 400px;
  }
`;
