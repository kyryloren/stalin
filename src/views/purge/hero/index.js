import React from 'react';
import { BigTitleText } from '../style';
import { SecondLine, ImageWrapper, ImageContainer, ParaBox, FirstPanel } from './style';
import { StyledImage, ParaText } from '@styles';
import { SplitWrapper, Row } from '../style';

const Hero = ({ data }) => {
  return (
    <FirstPanel>
      <SplitWrapper>
        <Row>
          <BigTitleText>The Great Purge</BigTitleText>
          <ParaBox>
            <ParaText number="01">
              The Great Purge, also known as the “Great Terror”, was bloody polticial compaign meant
              to kill off all communist members who were in disagreement with Stalin.
            </ParaText>
          </ParaBox>
        </Row>
        <SecondLine>
          <ImageWrapper>
            <ImageContainer>
              <StyledImage
                fluid={data.purge_people.childImageSharp.fluid}
                alt="People during the Great Purge"
                style={{ position: 'absolute' }}
              />
            </ImageContainer>
          </ImageWrapper>
          <BigTitleText>Большой террор</BigTitleText>
        </SecondLine>
      </SplitWrapper>
    </FirstPanel>
  );
};

export default Hero;
