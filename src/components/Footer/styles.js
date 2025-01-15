import styled from "styled-components"

export default styled.footer `
height: 345px;
background-color: ${({ theme }) => theme.colors.footerColor};
border-top: 2px solid ${({ theme }) => theme.colors.footerBorderColor};
div.containerul {
    display: flex;
    column-gap: 242px;
    ul {
        list-style: none;
        color: black;
        font: ${({ theme }) => theme.fontPattern.paragraph};
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        color: ${({ theme }) => theme.colors.snow};
    }
}
` 
