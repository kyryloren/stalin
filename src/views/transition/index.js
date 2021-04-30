/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  TransitionSection,
  StyledImage,
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageTwoWrap,
} from './style';

gsap.registerPlugin(ScrollTrigger);

const Transition = ({ data }) => {
  let sectionContainer = useRef(null);
  let image = useRef([]);

  useEffect(() => {
    let tl = gsap
      .timeline({ defaults: { ease: 'none' } })
      .from(image.current[0], { top: 0, left: '-45%' })
      .from(image.current[1], { top: 0, right: '-45%' }, 0)
      .from(image.current[2], { top: 0, right: '-45%' }, 0)
      .to(image.current[3], { width: '100vw', height: '100vh' }, 1)
      .to(image.current[1], { right: 0, top: 0 }, 1);

    ScrollTrigger.create({
      trigger: sectionContainer,
      start: 'top 200vh',
      end: ' +=2000 200vh',
      scroller: '#___gatsby',
      animation: tl,
      scrub: true,
      pin: true,
    });

    ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
    ScrollTrigger.refresh();
  }, []);

  return (
    <TransitionSection ref={el => (sectionContainer = el)}>
      <ImageOne ref={el => (image.current[0] = el)}>
        <StyledImage
          fluid={data.trans_image1.childImageSharp.fluid}
          alt="Stalin"
          style={{ position: 'absolute' }}
        />
      </ImageOne>
      <ImageTwo ref={el => (image.current[1] = el)}>
        <ImageTwoWrap ref={el => (image.current[3] = el)}>
          <StyledImage
            fluid={data.trans_image2.childImageSharp.fluid}
            alt="Stalin"
            style={{ position: 'absolute' }}
          />
        </ImageTwoWrap>
      </ImageTwo>
      <ImageThree ref={el => (image.current[2] = el)}>
        <StyledImage
          fluid={data.trans_image3.childImageSharp.fluid}
          alt="Stalin"
          style={{ position: 'absolute' }}
        />
      </ImageThree>
    </TransitionSection>
  );
};

export default Transition;
