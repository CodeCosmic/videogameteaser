import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import HatMan from '../app/assets/img/hatMan.png'
import ContactUs from './ContactUs';

const Header = () => {
    return (
        <Navbar dark sticky='top'>
            <NavbarBrand>
                <img src={HatMan} alt='hatMan' />
            </NavbarBrand>
        </Navbar>
    )
}

export default Header;