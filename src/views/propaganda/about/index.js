import React from 'react';
import { AboutSection, Row, Col, StyledImage, NormalText, Line1, Line2 } from './style';
import { ParaText } from '@styles';

const About = ({ data }) => {
  return (
    <AboutSection>
      <Line1>
        <NormalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</NormalText>
      </Line1>
      <Line2>
        <NormalText>
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do.
        </NormalText>
      </Line2>
      <Row>
        <Col text>
          <ParaText number="01">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ParaText>
          <ParaText number="02">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ParaText>
        </Col>
        <Col>
          <StyledImage
            fluid={data.prop_poster4.childImageSharp.fluid}
            alt="Stalin's propaganda"
            imgStyle={{ objectFit: 'contain' }}
          />
        </Col>
      </Row>
    </AboutSection>
  );
};

export default About;
