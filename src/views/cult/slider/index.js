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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </ParaText>
          </Col>
          <Col>
            <ParaText number="04">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </ParaText>
          </Col>
        </TextRow>
      </Container>
    </SliderSection>
  );
};

export default Slider;
