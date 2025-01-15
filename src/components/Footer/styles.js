import styled from "styled-components";

export default styled.footer`
  height: 345px;
  background-color: ${({ theme }) => theme.colors.footerColor};
  border-top: 2px solid ${({ theme }) => theme.colors.footerBorderColor};
  display: flex;
  flex-direction: column;
  padding: 0px 160px;
  font: ${({ theme }) => theme.fontPattern.paragraphFooter};

  div.containerul {
    display: flex;
    column-gap: 242px;
    flex: 1;
    padding-top: 54px;
    justify-content: center;
    ul {
      list-style: none;
      color: black;
      display: flex;
      flex-direction: column;
      row-gap: 12px;
      color: ${({ theme }) => theme.colors.snow};
    }
  }

  div.containerCopyrights {
    display: flex;
    justify-content: space-between;
    padding: 32px 0px;
    p {
      font: ${({ theme }) => theme.fontPattern.paragraphFooter};
    }
  }

  div.containerSocialMedias {
    display: flex;
    column-gap: 16px;
  }

  div.icons {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.snow};
  }
`;
