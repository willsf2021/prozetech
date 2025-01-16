import Container from "./styles";
import locationIcon from "../../assets/contactSection/location.png"
import mailIcon from "../../assets/contactSection/mail.png"
import instagramIcon from "../../assets/contactSection/instagram.png"
import whatsappIcon from "../../assets/contactSection/whatsapp.png"
import logo from "../../assets/logo.png"

export const Contact = () => {
    return (
        <Container>
            <div className="wrap">
                <h2>Contatos</h2>
                <div className="containerContacts">
                    <div className="contactItem">
                    <a href="https://www.instagram.com/prozetech/" target="_blank"><img src={instagramIcon} alt="" /><p>@prozetech</p></a>
                    </div>
                    <div className="contactItem">
                    <a href="https://wa.me/19999712966" target="_blank"><img src={whatsappIcon} alt="" /><p>(19) 99971-2966 - Pedro</p></a>
                    </div>
                    <div className="contactItem">
                    <a href="https://wa.me/19998643221" target="_blank"><img src={whatsappIcon} alt="" /><p>(19) 99864-3221 - Wilson</p></a>
                    </div>
                    <div className="contactItem">
                    <a href="mailto:contatoprozetech@gmail.com" target="_blank"><img src={mailIcon} alt="" /><p>contatoprozetech@gmail.com</p></a>
                    </div>
                    <div className="contactItem">
                    <a href="https://maps.app.goo.gl/77czBEd3bunXeMym7" target="_blank"><img src={locationIcon} alt="" /><p>Av. Antônio Pedro, 242, Jardim Santa Olívia II - Araras / SP</p></a>
                    </div>
                </div>
                <div className="imgLogo">
                    <img src={logo} alt="" />
                </div>
            </div>
        </Container>
    )
}