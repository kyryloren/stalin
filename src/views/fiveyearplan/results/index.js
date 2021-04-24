import React from 'react';
import {
  ResultsSection,
  Row,
  TopRow,
  Col,
  BigTitle,
  NormalText,
  StyledImage,
  TopImage,
  BottomImage,
  HalfRow,
  HalfCol,
} from './style';
import { Container, ParaText } from '@styles';

const Results = ({ data }) => {
  return (
    <ResultsSection>
      <Container>
        <TopRow>
          <BigTitle>A failed</BigTitle>
          <BigTitle>Success</BigTitle>
        </TopRow>
        <Row>
          <Col image>
            <TopImage data-scroll data-scroll-speed={2}>
              <StyledImage
                fluid={data.fyp_poster2.childImageSharp.fluid}
                alt="Propaganda from the Five Year Plan"
                imgStyle={{ objectFit: 'contain' }}
              />
            </TopImage>
            <BottomImage data-scroll data-scroll-speed={1}>
              <StyledImage
                fluid={data.fyp_poster3.childImageSharp.fluid}
                alt="Propaganda from the Five Year Plan"
                imgStyle={{ objectFit: 'contain' }}
              />
            </BottomImage>
          </Col>
          <Col>
            <NormalText>
              Stalin’s Five Year Plan achieved amazing success. However, most of this came at the
              cost of many human lives.
            </NormalText>
          </Col>
        </Row>
        <HalfRow>
          <HalfCol>
            <ParaText number="03">
              The USSR did succeed in modernizing and becoming a military threat. Some examples
              include imporved eletricity supply and an increase in machines produced. Heavy
              industries also saw an increase in output and productivity.
            </ParaText>
          </HalfCol>
          <HalfCol>
            <ParaText number="04">
              The five year plans were poorly organized, leading to wastes in resources. These plans
              were also executed through severe means, usually at the cost of human lives and
              rights. This included many accidental deaths, slave labor, labor camps (Gulag), and
              horrible work conditions.
            </ParaText>
          </HalfCol>
        </HalfRow>
      </Container>
    </ResultsSection>
  );
};

export default Results;
