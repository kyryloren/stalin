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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim
              veniam,
            </NormalText>
          </ParaWrapper>
        </Row>
        <ParaWrapper>
          <NormalText>
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute
          </NormalText>
        </ParaWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
