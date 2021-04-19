import React from 'react';
import { StyledSection } from './style';
import { Container } from '@styles';

import Hero from './hero';
import About from './about';
import Politics from './politics';

const NKVD = ({ data }) => {
  return (
    <StyledSection>
      <Container>
        <Hero data={data} />
        <About data={data} />
        <Politics data={data} />
      </Container>
    </StyledSection>
  );
};

export default NKVD;
