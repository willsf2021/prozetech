import styled from "styled-components";

export default styled.a`
  position: fixed;
  bottom: 80px;
  right: 160px;
  font-size: 64px;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    svg {
      transform: scale(1.2); /* Aumenta o tamanho do ícone */
      transition: transform 0.2s ease-in-out; /* Suaviza a animação */
    }
  }
`;
