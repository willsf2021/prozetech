import styled from "styled-components";

export default styled.section`

div.wrap{

    div.imgLogo {
        img {
            width: 208px;
            height: 45px;
        }
    }
}
div.div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
div.containerContacts {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    padding-top: 78px;
}
div.contactItem {
    
    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 12px;
    }
}
`