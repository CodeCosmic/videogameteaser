import { Navbar, NavbarBrand } from 'reactstrap';
import HatMan from '../../app/assets/img/hatMan.png'
import './header.css'

const Header = () => {
    return (
        <Navbar dark className='headerTop'>
            <NavbarBrand>
                <img src={HatMan} alt='hatMan' />
            </NavbarBrand>
            <hr className='bigLine' />
        </Navbar>
    )
}

export default Header;
