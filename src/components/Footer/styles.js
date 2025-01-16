import styled from "styled-components";

export default styled.footer`
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  border-top: 2px solid ${({ theme }) => theme.colors.footerBorderColor};
  div.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 80px;
    font: ${({ theme }) => theme.fontPattern.paragraphFooter};
  }

  div.containerCopyrights {
    height:128px;
    display: flex;
    align-items: center;
    p {
      font: ${({ theme }) => theme.fontPattern.paragraphFooter};
    }
  }
`;
