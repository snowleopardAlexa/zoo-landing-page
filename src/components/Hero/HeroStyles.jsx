import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const HeroSection = styled.section `
 height: 100vh;
 background-position: center;
 background-size: cover;
 padding-top: clamp(70px, 25vh, 220px);
 box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroVideo = styled.video `
 object-fit: cover;
 width: 100%;
 height: 100%;
 background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
 top: 0;
 position: absolute;
z-index: -1;
`;

export const HeroText = styled.p `
 margin-bottom: 35px;
 font-size: clamp(2rem, 1.5vh, 1.3rem);
 line-height: 24px;
 text-align: center;
 letter-spacing: 2px;
 color: #fff;
`;

export const ButtonWrapper = styled.div `
width: 100%;
display: flex;
justify-content: center;
flex-flow: wrap;
gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
color: white;
font-family: 'Questrial', sans-serif;
font-size: 1.5rem;
border: 1px solid white;
border-radius: 0%;

&:before {
    background: #52c234;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #061700, #52c234);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #061700, #52c234); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border: none;
    height: 500%;
}

&:hover:before {
    height: 0%; 
}

&:hover {
    color: #0f9b0f;
    color: white;
}
`;