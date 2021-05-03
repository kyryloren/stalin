import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  AboutSection,
  Row,
  Col,
  ImageWrapper,
  StyledImage,
  TopLine,
  SecondLine,
  ThirdLine,
  BigTitle,
} from './style';
import { Container, ParaText } from '@styles';

gsap.registerPlugin(ScrollTrigger);

const Close = ({ data }) => {
  let textRef = useRef([]);
  let sectionContainer = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      let tl = gsap
        .timeline({ defaults: { ease: 'none' } })
        .to(textRef.current[0], { left: '5.1%' }, 0)
        .to(textRef.current[1], { left: '5.1%' }, 0)
        .to(textRef.current[2], { left: '5.1%' }, 0);

      ScrollTrigger.create({
        trigger: sectionContainer,
        start: 'top bottom',
        end: '+=2000 bottom',
        scroller: '#___gatsby',
        animation: tl,
        scrub: true,
      });

      ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
      ScrollTrigger.refresh();
    }, 200);
  }, []);

  return (
    <AboutSection ref={el => (sectionContainer = el)}>
      <Container>
        <TopLine ref={el => (textRef.current[0] = el)}>
          <BigTitle>All-powerful</BigTitle>
        </TopLine>
        <SecondLine ref={el => (textRef.current[1] = el)}>
          <BigTitle>All-knowing</BigTitle>
        </SecondLine>
        <ThirdLine ref={el => (textRef.current[2] = el)}>
          <BigTitle>Our leader</BigTitle>
        </ThirdLine>
        <Row>
          <Col>
            <ParaText number="01">
              Stalin's propaganda was everywhere, controlling people and brain washing them to
              believing that Stalin was a god-like figure.
            </ParaText>
            <ParaText number="02">
              His image was everywhere. Stalin's propaganda served well in masking the darker side
              of the regime and in bending the truth. He relied on the hypnotic power of mass
              ideology to condition people into believing he was working to achieve perfect
              socialism.
            </ParaText>
          </Col>
          <Col>
            <ImageWrapper>
              <StyledImage
                fluid={data.cult_poster2.childImageSharp.fluid}
                alt="Cult of personality poster"
              />
            </ImageWrapper>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default Close;
