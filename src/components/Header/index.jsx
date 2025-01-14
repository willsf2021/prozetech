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
      <div className="hero">
        <aside>
          <h1>Soluções completas para Notebooks, Desktops, Periféricos e PCs Gamers.</h1>
          <p>
            <strong> Assistência Técnica </strong>e montagem de
            <strong> PCs Gamers </strong>sob medida.
          </p>
          <button>
            <span>
              Entre em c
            </span>ontato
          </button>
        </aside>        
      </div>
    </Container>
  );
};
