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
                Was started by the killing of Sergei Kirov who was a political leader in the
                Leningrad apparatus that had gained massive popularity. Stalin, being very paranoid,
                staged his with the NKVD, using it as a pretext to The Great Purge
              </ParaText>
            </ParagraphWrapper>
            <ParagraphWrapper>
              <ParaText number="03">
                Using the killing of Kirov, Stalin began arresting other innocent political members
                and forming staged trials for others. In these staged trials people were tortured
                behind the scenes into falsely admitting to the crimes in court.
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
                Altogether the Purges helped to maintain Stalin’s authority and further intimidate
                any other political members. The Great Terror is sometimes thought of as the crime
                of the century, as estimated deaths near 1 million.
              </ParaText>
            </ParagraphWrapper>
          </StyledRow>
        </Row>
      </StyledSplitWrapper>
    </SecondPanel>
  );
};

export default About;
