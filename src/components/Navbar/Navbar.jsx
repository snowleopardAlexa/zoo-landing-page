import { useState } from 'react';
import { FaRProject, FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { data } from '../../data/NavbarData';

const Navbar = () => {
    return (
     <Nav>
         <NavbarContainer>
             <NavLogo to="/">
                 <NavIcon src="./assets/logo.png" alt="logo" />
                 Panaewa Zoo
             </NavLogo>
             <MobileIcon>
                {show ? <FaTimes /> : <CgMenuRight />}
             </MobileIcon>
             <NavMenu>
                 {data.map((el, index) => (
                   <NavItem>
                     <NavLinks>{el.text}</NavLinks>
                  </NavItem>
                 ))}
             </NavMenu>
         </NavbarContainer>
     </Nav>
    );
}