import Container from "./styles";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";

export const Header = () => {
  return (
    <Container>
      <div className="wrap">
        <nav>
          <div>
            <img src={logo} alt="Logo Prozetech" />
          </div>
          <ul>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#work">Trabalho</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
          <div className="mobileMenu">
            <img src={menu} alt="" />
          </div>
        </nav>
        <div className="hero">
          <aside>
            <h1>
              Soluções completas para Notebooks, Desktops, Periféricos e PCs
              Gamers.
            </h1>
            <h3>
              <strong> Assistência Técnica </strong>e montagem de
              <strong> PCs Gamers </strong>sob medida.
            </h3>
            <button>
              <span>
                Entre <span>em</span> c
              </span>
              ontato
            </button>
          </aside>
        </div>
      </div>
    </Container>
  );
};
