import styled from "styled-components";

export default styled.div`
  /* margin: 24px 0px; */
  height: 2px;
  width: 100%;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.veryDarkBlue},
    ${({ theme }) => theme.colors.snowOpacity},
    ${({ theme }) => theme.colors.veryDarkBlue}
  );
`;
