import Container from "./styles";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";

export const Header = () => {
  return (
    <Container>
      <nav>
        <div>
          <img src={logo} alt="Logo Prozetech" />
        </div>
        <ul>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Trabalho</li>
          <li>Contato</li>
        </ul>
        <div className="mobileMenu">
          <img src={menu} alt="" />
        </div>
      </nav>
    </Container>
  );
};
