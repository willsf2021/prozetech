import Container from "./styles";
import { Mock } from "./Mock";
import technicalAssistance from "../../assets/technicalAssistance.png";
import webDevelopment from "../../assets/webDevelopment.png";
import pcGamer from "../../assets/pcGamer.png";

export const Services = () => {
  return (
    <Container>
      <article className="ourServices">
        <div>
          <h2>Nossos Serviços</h2>
        </div>
        <div className="mock">
          <Mock
            image={technicalAssistance}
            title="Assistência Técnica"
            text="Limpeza interna e externa, diagnóstico e análise de falhas em hardware e software, formatação, backup e instalação de periféricos."
          />
          <Mock
            image={pcGamer}
            title="Montagem de PCs Gamers"
            text="Montagem de PCs Gamers personalizados, assessoria na escolha de componentes, configuração e otimização de performance."
          />
          <Mock
            image={webDevelopment}
            title="Desenvolvimento Web"
            text="Desenvolvimento de sites personalizados, criação de sistemas web, manutenção e otimização de performance."
          />
        </div>
      </article>
      <article className="whatWeOffer">
        
      </article>
    </Container>
  );
};
