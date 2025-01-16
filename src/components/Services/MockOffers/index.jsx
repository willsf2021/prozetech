import Container from "./styles";

export const MockOffers = ({ image, title, text }) => {
  return (
    <Container>
      <div>
        <img src={image} alt="imagem" />
      </div>
      <div>
          <h3>{title}</h3>
          <p>{text}</p>
      </div>
    </Container>
  );
};
