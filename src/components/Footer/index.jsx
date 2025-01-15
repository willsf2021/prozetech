import Container from "./styles"
import { Hr } from "../Hr"
export const Footer = () => {
    return (
        <Container>
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
            <Hr />
        </Container>
    )
}