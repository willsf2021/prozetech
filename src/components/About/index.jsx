import Container from "./styles";
import rectangle from "../../assets/rectangle3.png";

export const About = () => {
  return (
    <Container id="about">
      <div className="wrap">
        <div className="contain">
          <img src={rectangle} alt="" />
          <h2>Sobre</h2>
          <p>
            Fundada em 2025, muito embora há pouco tempo, trazemos na bagagem
            anos de experiência em assistência técnica de computadores. Nosso
            técnico é um profissional altamente qualificado, que já resolveu
            inúmeros problemas tecnológicos ao longo de sua carreira e agora
            decidiu transformar sua paixão e expertise em um negócio próprio.
            <p>
              Cada serviço é realizado com o cuidado e a dedicação de quem
              entende a importância de ter um equipamento funcionando
              perfeitamente, seja para o dia a dia, trabalho ou estudos.Estamos
              começando uma nova jornada, mas com a certeza de que cada cliente
              atendido será o início de uma parceria sólida e de confiança.
              <p>
                Convidamos você a conhecer nosso trabalho e permitir que a gente
                cuide do que é essencial para você.
              </p>
            </p>
          </p>
        </div>
      </div>
    </Container>
  );
};
