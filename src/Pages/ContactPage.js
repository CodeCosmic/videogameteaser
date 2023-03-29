import { Container, Col, Row } from "reactstrap";
import ContactUs from "../components/ContactUs";
import { Link } from "react-router-dom";
import './ContactPage.css'

const ContactPage = () => {
    return (
        <Container style={{padding: '5%'}}>
            <Row className='row-content'>
                <Col xs='12'>
                    <h2 >Contact Us</h2>
                    <hr />
                </Col>
                <Col md='10'>
                    <ContactUs />
                </Col>
                <Col md='10'>
                    <h2>Back to Game</h2>
                    <div>
                        <Link to='/'>
                            <button className="contactButton">Game</button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;