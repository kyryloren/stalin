/* eslint react-hooks/exhaustive-deps: 0 */
import React from 'react';
import { AboutSection, Row, Col } from './style';
import { StyledImage, ParaText } from '@styles';

const About = ({ data }) => {
  return (
    <AboutSection>
      <Row>
        <Col>
          <ParaText number="01">
            The NKVD’s main job was to ensure national security, however it was carried out in very
            radical ways. They would find and arrest anyone suspected of being
            anti-Communist/Stalinist, these people would then either be killed or sent to the Gulag.
          </ParaText>
          <ParaText number="02">
            Not long after their establishment the NKVD became feared by all citizens throughout the
            USSR. This intimidation proved useful as people would spy on neighbors and report them
            to the NKVD, believing that if they didn’t they instead would get reported on.
          </ParaText>
        </Col>
        <Col>
          <StyledImage
            fluid={data.nkvd_police2.childImageSharp.fluid}
            alt="Stalin's Secret Police"
            style={{ position: 'absolute' }}
          />
        </Col>
      </Row>
    </AboutSection>
  );
};

export default About;
