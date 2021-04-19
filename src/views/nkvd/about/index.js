/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useRef } from 'react';
import { TimelineLite, gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { AboutSection, Row, Col } from './style';
import { StyledImage, ImageAnim, ParaText } from '@styles';

gsap.registerPlugin(ScrollTrigger);

const About = ({ data }) => {
  let tl = new TimelineLite();
  let aboutSection = useRef(null);
  let image = useRef(null);

  useEffect(() => {
    tl.to(image, {
      scrollTrigger: {
        trigger: aboutSection,
        pin: true,
        scrub: true,
        start: 'center center',
        end: 'bottom top',
        scroller: '#___gatsby',
      },
      scaleY: 0,
    });

    ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
  }, [tl]);

  return (
    <AboutSection>
      <Row ref={el => (aboutSection = el)}>
        <Col>
          <ParaText number="01">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </ParaText>
          <ParaText number="02">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </ParaText>
        </Col>
        <Col>
          <ImageAnim ref={el => (image = el)} />
          <StyledImage
            fluid={data.nkvd_police2.childImageSharp.fluid}
            alt="Stalin's Secret Police"
            style={{ position: 'absolute' }}
          />
        </Col>
      </Row>
    </AboutSection>
  );
};

export default About;
