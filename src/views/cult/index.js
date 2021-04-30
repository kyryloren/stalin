import React from 'react';
import { CultSection } from './style';

import Hero from './hero';
import About from './about';
import Close from './close';
import Slider from './slider';

const Cult = ({ data }) => {
  return (
    <CultSection>
      <Hero data={data} />
      <About />
      <Close data={data} />
      <Slider data={data} />
    </CultSection>
  );
};

export default Cult;
