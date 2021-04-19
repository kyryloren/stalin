import React from 'react';
import { BigTitle } from '../style';
import { HeroSection, NumberWrapper, SecondLineWrap, ImageWrapper } from './style';
import { SectionNumber, StyledImage } from '@styles';

const Hero = ({ data }) => {
  return (
    <HeroSection>
      <BigTitle>Secret police-</BigTitle>
      <SecondLineWrap>
        <ImageWrapper>
          <StyledImage
            fluid={data.nkvd_police1.childImageSharp.fluid}
            alt="Stalin's NKVD"
            style={{ position: 'absolute' }}
          />
        </ImageWrapper>
        <BigTitle>NKVD</BigTitle>
      </SecondLineWrap>
      <NumberWrapper data-scroll data-scroll-speed={1}>
        <SectionNumber>4</SectionNumber>
      </NumberWrapper>
    </HeroSection>
  );
};

export default Hero;
