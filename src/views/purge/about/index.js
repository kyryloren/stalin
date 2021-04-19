import React from 'react';
import { BigTitleText, Row } from '../style';
import { SecondPanel, StyledImage, ParagraphWrapper, StyledSplitWrapper, StyledRow } from './style';
import { ParaText } from '@styles';

const About = ({ data }) => {
  return (
    <SecondPanel>
      <Row>
        <StyledImage
          fluid={data.purge_rubble.childImageSharp.fluid}
          alt="Rubble during the Great Purge"
        />
      </Row>
      <StyledSplitWrapper>
        <Row>
          <StyledRow>
            <ParagraphWrapper>
              <ParaText number="02">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </ParaText>
            </ParagraphWrapper>
            <ParagraphWrapper>
              <ParaText number="03">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </ParaText>
            </ParagraphWrapper>
          </StyledRow>
          <BigTitleText>November 1938</BigTitleText>
        </Row>
        <Row>
          <BigTitleText>August 1936—</BigTitleText>
          <StyledImage
            secondImage
            fluid={data.purge_soldiers.childImageSharp.fluid}
            alt="Soldiers during the Great Purge"
          />
          <StyledRow>
            <ParagraphWrapper>
              <ParaText number="04">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </ParaText>
            </ParagraphWrapper>
          </StyledRow>
        </Row>
      </StyledSplitWrapper>
    </SecondPanel>
  );
};

export default About;
