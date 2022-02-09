import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/tiger.mp4" autoPlay muted />
			<Container>
				<MainHeading>The most exhiliraiting zoo in Hawaii</MainHeading>
				<HeroText>
					We provide the best attractions and eye to eye interactions with animals
				</HeroText>
				<ButtonWrapper>
					<Link to="membership">
						<Button>Get Started</Button>
					</Link>
					<HeroButton>Find More</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;