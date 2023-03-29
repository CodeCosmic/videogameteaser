<<<<<<< HEAD
import { Navbar, NavbarBrand } from 'reactstrap';
import HatMan from '../app/assets/img/hatMan.png'


const Header = () => {
    return (
        <Navbar dark sticky='top'>
            <NavbarBrand>
                <img src={HatMan} alt='hatMan' />
            </NavbarBrand>
            <hr className='bigLine' />
        </Navbar>
        
    )
}

=======
import { Navbar, NavbarBrand } from 'reactstrap';
import HatMan from '../app/assets/img/hatMan.png'


const Header = () => {
    return (
        <Navbar dark sticky='top' >
            <NavbarBrand>
                <img src={HatMan} alt='hatMan' />
            </NavbarBrand>
            <hr className='bigLine' />
        </Navbar>
        
    )
}

>>>>>>> main
export default Header;