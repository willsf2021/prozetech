import styled from "styled-components";

export default styled.section`
  div.wrap {
    display: flex;
    flex-direction: column;
    row-gap: 96px;
  }

  article.ourServices {
    row-gap: 48px;
    display: flex;
    flex-direction: column;

    div.mock {
      display: flex;
      width: 100%;
      align-items: flex-start;
      justify-content: space-between;
    }
  }

  article.whatWeOffer {
    display: flex;
    flex-direction: column;
    row-gap: 48px;
    width: 100%;
    div.mockOffers {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, auto);
      row-gap: 56px;
      justify-content: space-between;
    }
  }
`;
