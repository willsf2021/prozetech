import Container from "./styles";
import { Mock } from "./Mock";
import { MockOffers } from "./MockOffers";
import { Hr } from "../Hr";
import technicalAssistance from "../../assets/technicalAssistance.png";
import webDevelopment from "../../assets/webDevelopment.png";
import pcGamer from "../../assets/pcGamer.png";
import repair from "../../assets/repair.png";
import consultoring from "../../assets/consultoring.png";
import site from "../../assets/site.png";
import upgrade from "../../assets/upgrade.png";

export const Services = () => {
  return (
    <Container id="services">
      <div className="wrap">
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
        <Hr />
        <article className="whatWeOffer">
          <div>
            <h2>O que Oferecemos</h2>
          </div>
          <div className="mockOffers">
            <MockOffers
              image={consultoring}
              title="Consultoria Especializada"
              text="Orientação para configurar ou montar o PC gamer dos seus sonhos."
            />
            <MockOffers
              image={repair}
              title="Manutenção Completa"
              text="Limpeza interna, troca de componentes e ajustes de desempenho."
            />
            <MockOffers
              image={site}
              title="Criação de Sites:"
              text="Desenvolvimento de páginas personalizadas para empresas e profissionais autônomos."
            />
            <MockOffers
              image={upgrade}
              title="Reparos e Upgrades"
              text="Substituição de peças e melhorias para notebooks, desktops e periféricos."
            />
          </div>
        </article>
      </div>
    </Container>
  );
};
