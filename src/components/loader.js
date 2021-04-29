/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useRandomInterval } from '@hooks';
import { Overflow } from '@styles';
import { TimelineLite, Power4 } from 'gsap';

const SectionLoader = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 9999;
  background-color: var(--background);
`;
const LoadBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9998;
  height: 100%;
  background-color: var(--accent);
`;
const StyledOverflow = styled(Overflow)`
  z-index: 9999;
  mix-blend-mode: difference;
`;
const BigTitleText = styled.h1`
  font-family: var(--font-family-serif);
  font-size: 20vw;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  line-height: 95%;
  mix-blend-mode: difference;
  z-index: 9999;
`;

const Loader = ({ setLoaded }) => {
  const [percent, setPercent] = useState(0);
  let minMax = percent < 97 ? [10, 50] : [250, 500];

  let tl = new TimelineLite();
  let sectionContainer = useRef(null);
  let textRef = useRef(null);

  useEffect(() => {
    if (percent === 100) {
      tl.to(textRef, { yPercent: -100, ease: Power4.easeIn, duration: 1, delay: 0.4 }).to(
        sectionContainer,
        {
          height: 0,
          ease: Power4.easeInOut,
          duration: 1.2,
          onComplete: () => setLoaded(true),
        },
        '-=0.3',
      );
    }
  }, [percent]);

  useRandomInterval(() => percent < 100 && setPercent(percent => percent + 1), ...minMax);

  return (
    <SectionLoader ref={el => (sectionContainer = el)}>
      <StyledOverflow>
        <BigTitleText ref={el => (textRef = el)}>{percent}%</BigTitleText>
      </StyledOverflow>
      <LoadBar style={{ width: `${percent}%` }} />
    </SectionLoader>
  );
};

export default Loader;
