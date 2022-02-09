import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	background: transparent;
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: absolute;
	top: 0;
	z-index: 50;
	width: 100%;

	transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;
	max-width: 2000px;
`;

export const NavLogo = styled(Link)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-family: 'Mali', cursive;
	font-weight: 600;
	font-size: 1.5rem;
	display: flex;
	align-items: center;

	z-index: 50;
`;

export const NavIcon = styled.img`
	margin-right: 1rem;
	width: 5rem;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: white;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background: #52c234;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #061700, #52c234);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #061700, #52c234); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}

	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled.span`
    font-family: 'Questrial', sans-serif;
	color: #fff;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	&:hover {
		color: yellow;
		transition: all 0.3s ease;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: yellow;
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;