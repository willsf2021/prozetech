import React from "react";
import Container from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const WhatsappButton = () => {
  const phoneNumber = "5519998643221";

  return (
    <Container
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#25d366" }} />
    </Container>
  );
};
