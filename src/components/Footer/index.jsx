import Container from "./styles";
import { Hr } from "../Hr";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import xIcon from "../../assets/x.png";
import linkedinIcon from "../../assets/linkedin.png";

export const Footer = () => {
  return (
    <Container>
      <div className="wrap">
        <div className="containerul">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>blog</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>Portfolio</li>
            <li>Our Services</li>
            <li>Careers</li>
            <li>Privacy Policies</li>
          </ul>
          <ul>
            <li>API Development</li>
            <li>MuleSoft</li>
            <li>Salesforce</li>
          </ul>
        </div>
        <Hr footer={true} />
        <div className="containerCopyrights">
          <p>
            Copyright © 2025 Prozetech Development, Todos os direitos
            reservados.
          </p>
          <div className="containerSocialMedias">
            <div className="icons">
              <img src={facebookIcon} alt="" />
            </div>
            <div className="icons">
              <img src={xIcon} alt="" />
            </div>
            <div className="icons">
              <img src={instagramIcon} alt="" />
            </div>
            <div className="icons">
              <img src={linkedinIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
