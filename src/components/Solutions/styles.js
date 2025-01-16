import styled from "styled-components";

export default styled.section`
  div.wrap {
    display: flex;
    padding: 0px 80px;
    justify-content: space-between;
  }
  /* column-gap: 80px; */
  div.leftSide {
    position: relative;
    max-width: 736px;
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    p {
      max-width: 504px;
      line-height: 2rem;
    }
    button.faleConosco {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.darkRed},
        ${({ theme }) => theme.colors.footerBorderColor}
      );
      width: fit-content;
      padding: 8px 24px;
      border-radius: 32px;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }

    img.rectangleTop {
      position: absolute;
      right: 80px;
      bottom: -32px;
    }
  }
  img.img1 {
    margin-top: 112px;
  }

  .img1,
  .img2 {
    transition: all 300ms ease-in-out;
  }

  .img1:hover,
  .img2:hover {
    transform: scale(1.01);
    border-radius: 16px;
  }
  div.rightSide {
    display: flex;
    flex-direction: column;
    row-gap: 80px;
    p {
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      display: flex;
      align-items: center;
      column-gap: 8px;
      margin-top: -144px;
      margin-left: 32px;
      span {
        color: ${({ theme }) => theme.colors.darkRed};
        font-size: ${({ theme }) => theme.fontSize.xg};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
      }
    }
  }
`;
