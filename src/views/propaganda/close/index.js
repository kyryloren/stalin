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
            Propaganda even infiltrated education, as teachers were forced to teach Communist
            principles and glorify Stalin’s rule.
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
                Other media forms like the radio, posters, and cinema were propagandized with
                Communist themes and symbols to help reach the illiterate of Russia. Newspapers and
                books had also been seized and put under propagandist publication, with opposing
                newspapers and books being shut down or purged.
              </ParaText>
            </HalfCol>
            <HalfCol>
              <ParaText number="04">
                Propaganda was also used to support his controversial policies, like
                collectivization. A tale of Stakhanov was even coined, depicting him mining 105
                tonnes of coal in one shift and praising him as a hero of socialist workers; hoping
                to instill this work ethic into the working people.
              </ParaText>
            </HalfCol>
          </Row>
        </Row>
      </Row>
    </CloseSection>
  );
};

export default Close;
