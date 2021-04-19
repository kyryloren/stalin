import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { StyledSection } from './style';
import { Container } from '@styles';

import Hero from './hero';
import About from './about';
import Close from './close';

gsap.registerPlugin(ScrollTrigger);

const Purge = ({ data }) => {
  let scrollContainer = useRef(null);

  useEffect(() => {
    gsap.to(scrollContainer, {
      yPercent: -72,
      scrollTrigger: {
        scroller: '#___gatsby',
        trigger: scrollContainer,
        start: '-2000% bottom',
        scrub: true,
      },
    });

    ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
  }, []);

  return (
    <StyledSection>
      <div ref={el => (scrollContainer = el)} id="propaganda">
        <Hero data={data} />
      </div>
      <Container>
        <About data={data} />
        <Close data={data} />
      </Container>
    </StyledSection>
  );
};

export default Purge;
