import React from 'react';
import styled from 'styled-components';

import Hero from './hero';
import About from './about';
import Results from './results';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: 10vh;
`;

const FiveYearPlan = ({ data }) => {
  return (
    <StyledSection>
      <Hero data={data} />
      <About data={data} />
      <Results data={data} />
    </StyledSection>
  );
};

export default FiveYearPlan;
