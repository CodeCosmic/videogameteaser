import { Link } from 'react-router-dom';
import './footer.css'


const Footer = () => {
    return (
        <footer className='site-footer'>
             <hr className='bigLine'/>
            <div>
                <h1>Links</h1>
                <Link to='/contact' className='links'>Contact Us</Link>
                <h3>Social</h3>
                <a className='btn btn-social-icon btn-instagram links' href='https://instagram.com'>
                    <i className='fa fa-instagram'/>
                </a>{' '}
                <a className='btn btn-social-icon btn-facebook links' href='https://facebook.com'>
                    <i className='fa fa-facebook'/>
                </a>{' '}
                <a className='btn btn-social-icon btn-twitter links' href='https://twitter.com'>
                    <i className='fa fa-twitter'/>
                </a>{' '}
                <a className='btn btn-social-icon btn-google links' href='https://youtube.com'>
                    <i className='fa fa-youtube'/>
                </a>
                <br/>
                <a role='button' className='btn btn-link links' href='tel:+13211231234'>
                    <i className='fa fa-phone' /> 1-321-123-1234
                </a>
                <br/>
                <a role='button' className='btn btn-link links' href='mailto:notreal@notreal.co' >
                    <i className='fa fa-envelope-o' /> thelostmind@dream.co
                </a>
            </div>
        </footer>
    );
};

export default Footer;
