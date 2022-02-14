import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../../data/CarouselData';
import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
} from './CarouselStyles';

const Carousel = () => {
  return (
    <Section>
        <Row>
            <Heading></Heading>
            <ButtonContainer>

            </ButtonContainer>
        </Row>
        <ReviewSlider>
            <ImageWrapper>
                <CarouselImage>
                    <TextWrapper>

                    </TextWrapper>
                    <TextWrapper>

                    </TextWrapper>
                </CarouselImage>
                <CardButton>Read more</CardButton>
            </ImageWrapper>
        </ReviewSlider>
    </Section>
  )
}

export default Carousel;