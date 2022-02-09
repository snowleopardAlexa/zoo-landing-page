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

    const [show, setShow] = useState(false);

    let navigate = useNavigate();
    let location = useLocation();

    const handleClickMobileMenu = () => {
        setShow(!show);
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const closeMobileMenu = (to, id) => {
        if (id && location.path === '/') {
            scrollTo(id);
        }
        navigate.push(to);
            setShow(false);
    }

    return (
     <Nav>
         <NavbarContainer>
             <NavLogo to="/">
                 <NavIcon src="./assets/logo.png" alt="logo" />
                 Panaewa Zoo
             </NavLogo>
             <MobileIcon onClick={handleClickMobileMenu}>
                {show ? <FaTimes /> : <CgMenuRight />}
             </MobileIcon>
             <NavMenu>
                 {data.map((el, index) => (
                   <NavItem key={index}>
                     <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>{el.text}</NavLinks>
                  </NavItem>
                 ))}
             </NavMenu>
         </NavbarContainer>
     </Nav>
    );
}