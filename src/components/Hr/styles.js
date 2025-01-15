import styled from "styled-components";

export default styled.div`
  /* margin: 24px 0px; */
  height: 2px;
  width: 100%;
  background: linear-gradient(
    to right,
    ${(props) => props.footer? props.theme.colors.footerColor: props.theme.colors.veryDarkBlue},
    ${({ theme }) => theme.colors.snowOpacity},
    ${(props) => props.footer? props.theme.colors.footerColor: props.theme.colors.veryDarkBlue}
  );
`;
