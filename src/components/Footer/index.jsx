import Container from "./styles";
import { Hr } from "../Hr";

export const Footer = () => {
  return (
    <Container>
      <div className="wrap">
        <Hr footer={true} />
        <div className="containerCopyrights">
          <p>
            Copyright © 2025 Prozetech Development, Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </Container>
  );
};
