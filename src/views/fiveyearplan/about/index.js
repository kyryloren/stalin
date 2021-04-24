/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useRef } from 'react';
import { TimelineLite, gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { AboutSection, Row, Col } from './style';
import { StyledImage, Container, ImageAnim, ParaText } from '@styles';

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
    ScrollTrigger.refresh();
  }, [tl]);

  return (
    <AboutSection>
      <Container>
        <Row ref={el => (aboutSection = el)}>
          <Col>
            <ImageAnim ref={el => (image = el)} />
            <StyledImage
              fluid={data.fyp_poster1.childImageSharp.fluid}
              alt="Propaganda from the Five Year Plan"
              style={{ position: 'absolute' }}
            />
          </Col>
          <Col>
            <ParaText number="01">
              Stalin did this by taking control of the economy and using forced collectivization of
              agriculture. In forced colectivization the government took control of private farms
              and forced them to work for massive state owned enterprises, those who refused were
              exiled/killed. Many were also sent to the Gulag, a prison labor system established
              during the first five year plan.
            </ParaText>
            <ParaText number="02">
              In 1929 the number of collectivized farms was 5%, but by 1939 the number was up to
              99%. But collectivization did a lot of harm, causing a famine and millions dead
            </ParaText>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
