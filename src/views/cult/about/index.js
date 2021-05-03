import React from 'react';
import { AboutSection, ParaWrapper, NormalText, Row } from './style';
import { Container } from '@styles';

const About = () => {
  return (
    <AboutSection>
      <Container>
        <Row textTop>
          <ParaWrapper top>
            <NormalText>
              Stalin's cult was dependent on Lenin's legacy. Stalin rewrote the past and falsified
              photographs
            </NormalText>
          </ParaWrapper>
        </Row>
        <ParaWrapper>
          <NormalText>
            to ensure his succession. He upheld the core principles of Marxist-Leninism,
            strengthening his cult.
          </NormalText>
        </ParaWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
