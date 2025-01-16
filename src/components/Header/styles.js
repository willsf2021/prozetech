import styled from "styled-components";
import bgDesktop from "../../assets/bgHeroDesktop.png";

export default styled.header`
  height: 100vh;
  background: url(${bgDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 0px 80px;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 96px;
    min-height: 120px;
  }
  nav img:first-child {
    width: 208px;
  }
  nav ul {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    column-gap: 54px;
    li a {
      font: ${({ theme }) => theme.fontPattern.listItem};
    }

    li a:hover {
      color: ${({ theme }) => theme.colors.lightBlue};
    }
  }

  div.mobileMenu img {
    width: 24px;
  }
  div.hero {
    button span {
      border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};
    }
    button.contact {
      color: ${({ theme }) => theme.colors.lightBlue};
    }
    aside {
      margin-top: 54px;
      max-width: 700px;
      display: flex;
      flex-direction: column;
      row-gap: 32px;
      align-items: flex-start;
      h3 {
        font-weight: ${({ theme }) => theme.fontWeight.regular};
      }
    }
  }
`;
