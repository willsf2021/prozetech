import styled from "styled-components";
import bgDesktop from "../../assets/bgHeroDesktop.png"

export default styled.header`
 background: linear-gradient(${({theme}) => theme.colors.veryDarkBlue}, ${({theme}) => theme.colors.veryDarkBlue}), url("../../assets/bgHeroDesktop.png");
 
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
  }
  div.mobileMenu img {
    width: 24px;
  }
  div.hero{
    font-family: 'Poppins', sans-serif;
    h1 {
      font-size: ${({theme}) => theme.fontSize.lg};
    }
    p {
      font-size: ${({theme}) => theme.fontSize.sm};
    }
    button span {
      border-bottom: 1px solid ${({theme}) => theme.colors.snow};
    }
    aside{
      max-width: 500px;
    }

  }
  


`;
