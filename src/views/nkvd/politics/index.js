/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { BigTitle } from '../style';
import { Row, Col } from '../about/style';
import {
  PoliticsSection,
  ParaWrapper,
  NormalText,
  FirstLine,
  SecondLine,
  ImageWrapper,
  SpinningText,
} from './style';
import { ParaText, StyledImage } from '@styles';

gsap.registerPlugin(ScrollTrigger);

const Politics = ({ data }) => {
  let scrollContainer = useRef(null);
  let label = useRef(null);

  useEffect(() => {
    gsap.to(label, {
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
    <PoliticsSection ref={el => (scrollContainer = el)}>
      <FirstLine>
        <BigTitle>Control</BigTitle>
        <ImageWrapper>
          <StyledImage
            fluid={data.nkvd_police4.childImageSharp.fluid}
            alt="Stalin's NKVD"
            style={{ position: 'absolute' }}
          />
        </ImageWrapper>
      </FirstLine>
      <SecondLine>
        <SpinningText ref={el => (label = el)}>NKVD</SpinningText>
        <BigTitle>The Politics</BigTitle>
      </SecondLine>
      <Row>
        <Col>
          <ParaText number="03">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ParaText>
        </Col>
        <Col>
          <StyledImage
            fluid={data.nkvd_police3.childImageSharp.fluid}
            alt="Stalin's Secret Police"
            style={{ position: 'absolute' }}
          />
        </Col>
      </Row>
      <Row bottom pt>
        <ParaWrapper top>
          <NormalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</NormalText>
        </ParaWrapper>
        <ParaWrapper bottom>
          <NormalText>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute
          </NormalText>
        </ParaWrapper>
      </Row>
      <Row pt>
        <Col smaller>
          <StyledImage
            fluid={data.nkvd_police5.childImageSharp.fluid}
            alt="Stalin's Secret Police"
            style={{ position: 'absolute' }}
          />
        </Col>
        <Col reverse smaller np>
          <ParaText number="03">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ParaText>
        </Col>
      </Row>
    </PoliticsSection>
  );
};

export default Politics;
