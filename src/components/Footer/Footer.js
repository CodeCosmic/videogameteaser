import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import './footer.css'


const Footer = () => {
    return (
        <footer className='site-footer'>
             <hr className='bigLine'/>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h1>Links</h1>
                        <>
                            <Link to='/contact'>Contact</Link>
                        </>
                    </Col>
                     <Col xs='6' sm='3' className='text-center'>
                        <h3>Social</h3>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+13211231234'
                        >
                            <i className='fa fa-phone' /> 1-321-123-1234
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> thelostmind@dream.co
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;