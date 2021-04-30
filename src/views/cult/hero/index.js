import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  HeroSection,
  BigTitle,
  TitleWrapper,
  ImageWrapper,
  StyledImage,
  NumberWrapper,
} from './style';
import { SectionNumber } from '@styles';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ data }) => {
  let sectionContainer = useRef(null);
  let textRef = useRef([]);
  let imageRef = useRef(null);

  useEffect(() => {
    // We set this timeout because for some reason without it we're
    // not able to calculate the correct top position
    setTimeout(() => {
      let tl = gsap
        .timeline({ defaults: { ease: 'none' } })
        .to(textRef.current[0], { xPercent: -50, yPercent: -30, left: '50%', top: '30%' }, 0)
        .to(textRef.current[1], { xPercent: -50, yPercent: -60, left: '50%', top: '60%' }, 0)
        .to(textRef.current[2], { xPercent: -50, yPercent: -80, left: '50%', top: '90%' }, 0)
        .to(textRef.current[0], { scale: 10, opacity: 0 }, 0.8)
        .to(textRef.current[1], { scale: 10, opacity: 0 }, 0.8)
        .to(textRef.current[2], { scale: 10, opacity: 0 }, 0.8)
        .to(imageRef, { scale: 2, autoAlpha: 1 }, 1);

      ScrollTrigger.create({
        trigger: sectionContainer,
        start: 'top top',
        end: '+=2000 200vh',
        scroller: '#___gatsby',
        animation: tl,
        scrub: true,
        pin: true,
      });

      ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
      ScrollTrigger.refresh();
    }, 200);
  }, [sectionContainer, textRef, imageRef]);

  return (
    <HeroSection ref={el => (sectionContainer = el)}>
      <div id="personality">
        <TitleWrapper
          ref={el => (textRef.current[0] = el)}
          style={{ transform: 'translate(-80%, -30%);' }}
          first>
          <BigTitle>The cult of</BigTitle>
        </TitleWrapper>
        <TitleWrapper
          ref={el => (textRef.current[1] = el)}
          style={{ transform: 'translate(-150%, -60%);' }}
          second>
          <BigTitle>personality</BigTitle>
        </TitleWrapper>
        <NumberWrapper
          style={{ transform: 'translate(-80%, -90%);' }}
          ref={el => (textRef.current[2] = el)}>
          <SectionNumber>5</SectionNumber>
        </NumberWrapper>
        <ImageWrapper ref={el => (imageRef = el)}>
          <StyledImage
            fluid={data.cult_poster1.childImageSharp.fluid}
            alt="Stalin"
            style={{ position: 'absolute' }}
          />
        </ImageWrapper>
      </div>
    </HeroSection>
  );
};

export default Hero;
