import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
      scroll-behavior: smooth;
    }
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    body {
        color: ${({ theme }) => theme.colors.snow};
        background-color: ${({ theme }) => theme.colors.veryDarkBlue};
        margin: auto;
    }

    div#root {
        display: flex;
        flex-direction: column;
        row-gap: 96px;
    }

    div.wrap {
    max-width: 1440px;
    margin: auto;
    padding: 0px 80px;
  }
    
    
  a {
    color: inherit;
    text-decoration: none; 
    cursor: pointer; 
    transition: color 0.3s ease;
  }

  h1 {
    font: ${({ theme }) => theme.fontPattern.titleH1} 
  }
  h2 {
    font: ${({ theme }) => theme.fontPattern.titleH2} 
  }
  h3 {
    font: ${({ theme }) => theme.fontPattern.titleH3} 
  }
  p {
    font: ${({ theme }) => theme.fontPattern.paragraph};
    line-height: 1.8rem;
  }

  button {
        font-family: ${({ theme }) => theme.fontFamily.poppins};
        font-size: ${({ theme }) => theme.fontSize.sm};
        transition: transform 0.3s ease-in-out;
        &:hover {
        transform: scale(1.08);
      }
      }
  ul {
        list-style: none;
        
  }
    button {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.snow};
        border: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;
