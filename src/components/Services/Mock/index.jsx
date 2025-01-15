import Container from "./styles";

export const Mock = ({ image, title, text }) => {
  return (
    <Container>
      <div>
        <img src={image} alt="imagem" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </Container>
  );
};
