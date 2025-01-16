import styled from "styled-components";

export default styled.footer`
  background-color: ${({ theme }) => theme.colors.footerColor};
  border-top: 2px solid ${({ theme }) => theme.colors.footerBorderColor};
  div.wrap {
    height: 345px;
    display: flex;
    flex-direction: column;
    padding: 0px 80px;
    font: ${({ theme }) => theme.fontPattern.paragraphFooter};
  }

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

    img:hover {
      cursor: pointer;
      transform: scale(1.15);
      transition: transform 0.3s ease-in-out;
    }
  }
`;