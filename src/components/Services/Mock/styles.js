import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  /* background-color: blue; */
  img {
    max-width: 128px;
  }

  p {
    margin-top: 16px;
    
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.sm};
    min-width: 300px;
  }
  h3, p {
    max-width: 500px;
  }
`;
