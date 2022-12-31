import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import hatman from '../app/assets/img/hatMan.png'

const Header = () => {
    return (
        <Navbar dark sticky='top'>
            <NavbarBrand>
                <img src={hatman} alt='hatMan' />
            </NavbarBrand>
        </Navbar>
    )
}

export default Header;