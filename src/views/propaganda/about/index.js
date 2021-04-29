import React from 'react';
import { AboutSection, Row, Col, StyledImage, NormalText, Line1, Line2 } from './style';
import { ParaText } from '@styles';

const About = ({ data }) => {
  return (
    <AboutSection>
      <Line1>
        <NormalText>Stalin used propaganda as a means of swaying the people of the</NormalText>
      </Line1>
      <Line2>
        <NormalText>
          USSR to his regime and its views, while also demolishing the public view of his opponents.
        </NormalText>
      </Line2>
      <Row>
        <Col text>
          <ParaText number="01">
            One of the biggest uses of Propaganda by Stalin was on children. He believed that to
            succeed as a country he had to make a “new man” or new generation fully devoted and in
            belief in the Communist party and its agenda.
          </ParaText>
          <ParaText number="02">
            One example was the folk tale Stalin made starring Pavlik Morozov, a boy who denounced
            his father to the NKVD for hoarding grain. Pavlik became a symbol of ideal orthodox
            behavior, shaping the minds of a whole young generation towards radical support of their
            leader.
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
