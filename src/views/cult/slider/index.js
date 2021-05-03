import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SliderSection, SliderRow, StyledImage, ImageContainer, TextRow, Col } from './style';
import { Container, ParaText } from '@styles';

gsap.registerPlugin(ScrollTrigger);

const Slider = ({ data }) => {
  let sectionContainer = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      let tl = gsap
        .timeline({ defaults: { ease: 'none' } })
        .to(sectionContainer, { xPercent: '-=50' });

      ScrollTrigger.create({
        trigger: sectionContainer,
        start: 'top bottom',
        end: ' +=2000 top',
        scroller: '#___gatsby',
        animation: tl,
        scrub: true,
      });

      ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
      ScrollTrigger.refresh();
    }, 200);
  }, []);

  return (
    <SliderSection>
      <SliderRow ref={el => (sectionContainer = el)}>
        <ImageContainer>
          <StyledImage
            fluid={data.cult_poster3.childImageSharp.fluid}
            alt="Cult of personality poster"
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            fluid={data.cult_poster4.childImageSharp.fluid}
            alt="Cult of personality poster"
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            fluid={data.cult_poster5.childImageSharp.fluid}
            alt="Cult of personality poster"
          />
        </ImageContainer>
      </SliderRow>
      <Container>
        <TextRow>
          <Col>
            <ParaText number="03">
              Stalin also used education and the youth to create a new generation of believers that
              would help maintain his position in society and his control over people. Different
              playground games were transformed into their own Soviet versions, like Cowboys and
              Indians became Reds and Whites.
            </ParaText>
          </Col>
          <Col>
            <ParaText number="04">
              Stalin was able to carve out a position of power for himself. His terror and
              propaganda machine allowed him to maintain power throughout his rule. Anyone who
              opposed Stalin was seen as an enemy of the party, and in that sense also an enemy of
              the people.
            </ParaText>
          </Col>
        </TextRow>
      </Container>
    </SliderSection>
  );
};

export default Slider;
