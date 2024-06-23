import { Container, Row, Col } from "react-bootstrap"
import Header from "./Header";

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p>ProShop &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;