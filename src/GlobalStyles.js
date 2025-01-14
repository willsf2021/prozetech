import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        color: ${({theme}) => theme.colors.snow};
    }
    /* h2 {
        font: 600
    } */
    
    ul {
        list-style: none;
    }
    button {
        background-color: transparent;
        color: ${({theme}) => theme.colors.snow};
        border: none;
        font-family: "Poppins", sans-serif;

    }
`;

export default GlobalStyles;
