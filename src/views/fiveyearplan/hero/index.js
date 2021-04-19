/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useRef } from 'react';
import { TimelineLite, gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  HeroWrapper,
  BigTitle,
  ColItem,
  SubTitle,
  NumberWrapper,
  ParaWrapper,
  NormalText,
  AboutText,
  SplitWrapper,
  CaptionText,
} from './style';
import { StyledImage, SectionNumber, Container, Overflow } from '@styles';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ data }) => {
  let tl = new TimelineLite();
  let heroSection = useRef(null);
  let titleText = useRef([]);

  useEffect(() => {
    titleText.current.forEach(el => {
      tl.from(el, {
        scrollTrigger: {
          trigger: heroSection,
          start: 'top center',
          end: 'center center',
          toggleActions: 'play none none none',
          scroller: '#___gatsby',
          scrub: true,
        },
        yPercent: -100,
      });
    });

    ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
    ScrollTrigger.refresh();
  }, [tl]);

  return (
    <Container>
      <NumberWrapper data-scroll data-scroll-speed={1}>
        <SectionNumber>1</SectionNumber>
      </NumberWrapper>
      <HeroWrapper ref={el => (heroSection = el)}>
        <ColItem>
          <BigTitle>
            <Overflow>
              <div ref={el => (titleText.current[0] = el)}>Five</div>
            </Overflow>
            <Overflow>
              <div ref={el => (titleText.current[1] = el)}>Year</div>
            </Overflow>
            <Overflow>
              <div ref={el => (titleText.current[2] = el)}>Plan</div>
            </Overflow>
          </BigTitle>
          <Overflow>
            <SubTitle ref={el => (titleText.current[3] = el)}>Oct 1st, 1928—1933</SubTitle>
          </Overflow>
        </ColItem>
        <ColItem image>
          <StyledImage
            data-scroll
            data-scroll-speed={-1}
            fluid={data.fyp_people.childImageSharp.fluid}
            alt="People during the Five Year Plan"
            style={{ position: 'absolute' }}
          />
        </ColItem>
      </HeroWrapper>
      <AboutText>
        <SplitWrapper>
          <ParaWrapper top>
            <CaptionText>Done by taking control of</CaptionText>
            <CaptionText>the economy and using forced</CaptionText>
            <CaptionText> collectivization of agriculture</CaptionText>
          </ParaWrapper>
          <ParaWrapper top>
            <NormalText>
              The Five Year Plan was intended to transform the soviet union from a
              peasantry/agricultural
            </NormalText>
          </ParaWrapper>
        </SplitWrapper>
        <ParaWrapper>
          <NormalText>
            economy to an industrial power. It was meant to help the soviets win more wars and
            develop a better communist government.
          </NormalText>
        </ParaWrapper>
      </AboutText>
    </Container>
  );
};

export default Hero;
