import React from 'react';
import {
  CloseSection,
  TopImage,
  BottomImage,
  StyledImage,
  Row,
  NormalText,
  HalfCol,
  BottomImageWrap,
} from './style';
import { ParaText } from '@styles';

const Close = ({ data }) => {
  return (
    <CloseSection>
      <Row>
        <Row row>
          <TopImage data-scroll data-scroll-speed={2}>
            <StyledImage
              fluid={data.prop_poster5.childImageSharp.fluid}
              alt="Stalin's propaganda"
              imgStyle={{ objectFit: 'contain' }}
            />
          </TopImage>
          <NormalText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </NormalText>
        </Row>
        <Row>
          <BottomImageWrap>
            <BottomImage>
              <StyledImage
                fluid={data.prop_poster6.childImageSharp.fluid}
                alt="Stalin's propaganda"
                imgStyle={{ objectFit: 'contain' }}
              />
            </BottomImage>
          </BottomImageWrap>
          <Row row>
            <HalfCol>
              <ParaText number="03">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              </ParaText>
            </HalfCol>
            <HalfCol>
              <ParaText number="04">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              </ParaText>
            </HalfCol>
          </Row>
        </Row>
      </Row>
    </CloseSection>
  );
};

export default Close;
