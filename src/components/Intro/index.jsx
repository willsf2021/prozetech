import { Hr } from "../Hr";
import Container from "./styles";
import introImg from "../../assets/intro.png";

export const Intro = () => {
  return (
    <Container>
      <h2>Soluções ágeis e personalizadas.</h2>
      <div className="container">
        <div className="image">
          <img src={introImg} alt="Imagem Intro" />
        </div>
        <div className="text">
          <Hr />
          <p>
            Na Prozetech, oferecemos serviços especializados para manter e
            otimizar seus equipamentos, garantindo desempenho e funcionalidade.
            Realizamos diagnósticos precisos e reparos em notebooks e desktops,
            abrangendo desde problemas de hardware, como placas-mãe, telas e
            conectores, até falhas de software, incluindo reinstalação de
            sistemas operacionais e remoção de vírus. Também cuidamos de
            manutenção preventiva, como limpeza interna e troca de pasta
            térmica, evitando superaquecimento e aumentando a durabilidade dos
            componentes.
          </p>
          <button>
            <span>Sobre Nó</span>s
          </button>
        </div>
      </div>
    </Container>
  );
};