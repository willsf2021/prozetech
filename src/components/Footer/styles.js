import styled from "styled-components"

export default styled.footer `
height: 345px;
background-color: ${({ theme }) => theme.colors.footerColor};
border-top: 2px solid ${({ theme }) => theme.colors.footerBorderColor};
div.containerul {
    display: flex;
    height: 200px;
    width: 1000px;
    column-gap: 242px;

    ul {
        list-style: none;
        color: black;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        color: ${({ theme }) => theme.fontFamily.poppins};
    }
}
` 
