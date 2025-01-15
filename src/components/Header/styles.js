import styled from "styled-components";
import bgDesktop from "../../assets/bgHeroDesktop.png";

export default styled.header`
  height: 687px;
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
    width: 156px;
  }
  nav ul {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    column-gap: 54px;
    font-family: "Poppins", sans-serif;

    li a:hover {
      color: ${({ theme }) => theme.colors.lightBlue};
    }
  }
  div.mobileMenu img {
    width: 24px;
  }
  div.hero {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: 500;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.sm};
      font-family: "Poppins", sans-serif;
    }
    button {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
    button span {
      border-bottom: 1px solid ${({ theme }) => theme.colors.snow};
    }
    aside {
      max-width: 500px;
      display: flex;
      flex-direction: column;
      row-gap: 16px;
      align-items: flex-start;
    }
  }
`;
