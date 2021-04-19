import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { StyledSection, NumberWrapper, Row } from './style';
import { Container, SectionNumber } from '@styles';

import Hero from './hero';
import About from './about';

gsap.registerPlugin(ScrollTrigger);

const Purge = ({ data }) => {
  let scrollContainer = useRef(null);
  let sectionNumber = useRef(null);

  useEffect(() => {
    gsap.to(scrollContainer, {
      xPercent: -350,
      scrollTrigger: {
        scroller: '#___gatsby',
        trigger: scrollContainer,
        start: 'top top',
        scrub: true,
        pin: true,
        end: '+=10000',
      },
    });

    gsap.to(sectionNumber, {
      rotation: 360,
      scrollTrigger: {
        scroller: '#___gatsby',
        trigger: scrollContainer,
        start: '-40% top',
        toggleActions: 'play, pause, reverse, pause',
        scrub: true,
      },
    });

    ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
    ScrollTrigger.refresh();
  }, []);

  return (
    <StyledSection ref={el => (scrollContainer = el)}>
      <Container>
        <NumberWrapper ref={el => (sectionNumber = el)}>
          <SectionNumber>2</SectionNumber>
        </NumberWrapper>
        <Row>
          <Hero data={data} />
          <About data={data} />
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Purge;
