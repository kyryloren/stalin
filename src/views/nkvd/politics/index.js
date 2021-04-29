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
            As Stalin’s power increased so did the secret police of the USSR, forming the People’s
            Commissariat for Internal Affairs, which is abbreviated as the NKVD in Russian. The
            police force went from being used purely for enforcement to a political weapon.
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
          <NormalText>
            The NKVD was very powerful, with Communist support and a massive intelligence system,
          </NormalText>
        </ParaWrapper>
        <ParaWrapper bottom>
          <NormalText>
            allowing their paramilitary to carry out domestic and ethnic repression when necessary,
            on top of political missions.
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
          <ParaText number="04">
            After forming the NKVD, which was separated from party control and clear governmental
            regulation, they became tools for Stalin to carry out his Communist Agenda. This
            included carrying out the Great Purges, political assassinations and kidnappings.
          </ParaText>
        </Col>
      </Row>
    </PoliticsSection>
  );
};

export default Politics;
