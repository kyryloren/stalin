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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </ParaText>
          </HalfCol>
          <HalfCol>
            <ParaText number="04">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </ParaText>
          </HalfCol>
        </HalfRow>
      </Container>
    </ResultsSection>
  );
};

export default Results;
