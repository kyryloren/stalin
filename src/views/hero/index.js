/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useRef } from 'react';
import { TimelineLite, Power3 } from 'gsap';
import {
  SectionWrapper,
  ImageWrapper,
  BigTitle,
  ImageContainer,
  LeftWrap,
  RightWrap,
  FooterWrapper,
  SectionFooter,
  FooterText,
} from './style';
import { Container, StyledImage, ImageAnim, Overflow } from '@styles';

const Hero = ({ data }) => {
  let tl = new TimelineLite();
  let topText = useRef([]);
  let bottomText = useRef([]);
  let image = useRef([]);
  let leftText = useRef(null);
  let rightText = useRef(null);

  useEffect(() => {
    tl.staggerFrom(
      topText.current,
      0.8,
      { scale: 0, yPercent: -100, ease: Power3.easeOut, delay: 1 },
      0.02,
    )
      .fromTo(
        image.firstElementChild,
        { scaleY: 1 },
        { scaleY: 0, ease: Power3.easeOut, duration: 2 },
        '-=0.7',
      )
      .fromTo(
        image.lastElementChild,
        { scale: 1.3 },
        { scale: 1, ease: Power3.easeOut, duration: 1 },
        '-=2',
      )
      .staggerFrom(
        bottomText.current,
        0.8,
        { scale: 0, yPercent: -100, ease: Power3.easeOut },
        0.02,
        '-=2',
      )
      .add('dates', '-=1.5')
      .from(leftText, { yPercent: -100, ease: Power3.easeOut }, 'dates')
      .from(rightText, { yPercent: -100, ease: Power3.easeOut }, 'dates');
  }, [tl]);

  return (
    <>
      <SectionWrapper>
        <Overflow aria-label="Stalin's Rule">
          <BigTitle>
            <div ref={el => (topText.current[0] = el)}>S</div>
            <div ref={el => (topText.current[1] = el)}>t</div>
            <div ref={el => (topText.current[2] = el)}>a</div>
            <div ref={el => (topText.current[3] = el)}>l</div>
            <div ref={el => (topText.current[4] = el)}>i</div>
            <div ref={el => (topText.current[5] = el)}>n</div>
            <div ref={el => (topText.current[6] = el)}>'s</div>{' '}
            <div ref={el => (topText.current[7] = el)} className="break">
              R
            </div>
            <div ref={el => (topText.current[8] = el)}>u</div>
            <div ref={el => (topText.current[9] = el)}>l</div>
            <div ref={el => (topText.current[10] = el)}>e</div>
          </BigTitle>
        </Overflow>
        <Overflow aria-label="In the USSR">
          <BigTitle smaller>
            <div ref={el => (bottomText.current[0] = el)}>I</div>
            <div ref={el => (bottomText.current[1] = el)}>n</div>{' '}
            <div ref={el => (bottomText.current[2] = el)} className="break">
              T
            </div>
            <div ref={el => (bottomText.current[3] = el)}>h</div>
            <div ref={el => (bottomText.current[4] = el)}>e </div>
            <div ref={el => (bottomText.current[5] = el)} className="break">
              U
            </div>
            <div ref={el => (bottomText.current[6] = el)}>S</div>
            <div ref={el => (bottomText.current[7] = el)}>S</div>
            <div ref={el => (bottomText.current[8] = el)}>R</div>
          </BigTitle>
        </Overflow>
        <LeftWrap>
          <div data-scroll data-scroll-speed={2}>
            <Overflow>
              <div ref={el => (leftText = el)}>1922</div>
            </Overflow>
          </div>
        </LeftWrap>
        <RightWrap>
          <div data-scroll data-scroll-speed={2}>
            <Overflow>
              <div ref={el => (rightText = el)}>1953</div>
            </Overflow>
          </div>
        </RightWrap>
        <ImageWrapper>
          <ImageContainer ref={el => (image = el)} data-scroll data-scroll-id="image">
            <ImageAnim />
            <StyledImage
              data-scroll
              data-scroll-speed={-1}
              fluid={data.stalin.childImageSharp.fluid}
              alt="Joseph Stalin"
              style={{ position: 'absolute' }}
              critical
            />
          </ImageContainer>
        </ImageWrapper>
      </SectionWrapper>
      <FooterWrapper>
        <Container>
          <SectionFooter>
            <FooterText>Scroll down</FooterText>
            <FooterText>2021</FooterText>
          </SectionFooter>
        </Container>
      </FooterWrapper>
    </>
  );
};

export default Hero;
