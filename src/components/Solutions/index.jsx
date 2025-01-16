import Container from "./styles";
import rectangleTop from "../../assets/rectangle1.png";
import rectangleBottom from "../../assets/rectangle2.png";
import img1 from "../../assets/solutions1.png";
import img2 from "../../assets/solutions2.png";

export const Solutions = () => {
  return (
    <Container id="work">
      <div className="wrap">
        <div>
          <div className="leftSide">
            <h2>Soluções Técnicas de Alto Desempenho</h2>
            <p>
              Na Prozetech oferecemos uma ampla gama de serviços para cuidar do
              seu equipamento, desde reparos rápidos até montadens de PCs Gamers
              de última geração. Estamos prontos para garantir que sua
              tecnologia funcione no máximo desempenho.
            </p>
            <button className="faleConosco">
              <a href="mailto:contatoprozetech@gmail.com">Fale Conosco</a>
            </button>
            <img className="rectangleTop" src={rectangleTop} alt="picture" />
          </div>
          <div>
            <img className="img1" src={img1} alt="Ilustração" />
          </div>
        </div>
        <div className="rightSide">
          <div>
            <img src={img2} className="img2" alt="Ilustração" />
          </div>
          <img
            className="rectangleBottom"
            src={rectangleBottom}
            alt="picture"
          />
          <p>
            <span>10 +</span> Anos de Experiência
          </p>
        </div>
      </div>
    </Container>
  );
};
