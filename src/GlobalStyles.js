import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        color: ${({ theme }) => theme.colors.snow};
        background-color: ${({ theme }) => theme.colors.veryDarkBlue};
        max-width: 1440px;
        
    }

    div#root {
        display: flex;
        flex-direction: column;
        row-gap: 48px;
    }
    /* h2 {
        font: 600
    } */
    
  a {
    color: inherit;
    text-decoration: none; 
    cursor: pointer; 
    transition: color 0.3s ease;
  }

  h1, h2, h3 {
    font-family: "Poppins", sans-serif;
  }

  p {
    font: 400 ${({ theme }) => theme.fontSize.sm} "Lato", sans-serif;
  }
    ul {
        list-style: none 
    }
    button {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.snow};
        border: none;
        font-family: "Poppins", sans-serif;
        cursor: pointer;
    }
`;

export default GlobalStyles;
