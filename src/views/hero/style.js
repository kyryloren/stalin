import styled from 'styled-components';
import { media } from '@styles';

export const SectionWrapper = styled.section`
  position: relative;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 15vh;
`;
export const BigTitle = styled.h1`
  font-family: var(--font-family-serif);
  font-size: ${props => (props.smaller ? '13vw' : '16vw')};
  font-weight: 500;
  white-space: nowrap;
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  line-height: 85%;
  ${media.phablet`font-size: ${props => (props.smaller ? '18vw' : '24vw')};`};

  .break {
    margin-left: 3vw;
  }
  .break-big {
    margin-left: 5vw;
  }

  display: flex;
  text-align: center;
  justify-content: center;
`;
export const FooterWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: flex-end;
  z-index: -1;

  ${media.phablet`display: none;`};
`;
export const SectionFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 3vw;
`;
export const FooterText = styled.small`
  color: var(--accent);
  font-size: 1vw;
  text-transform: uppercase;

  ${media.tablet`font-size: 14px;`};
`;

// Image stuff
export const ImageWrapper = styled.div`
  display: flex;
  margin-top: -4vw;
  justify-content: center;
  align-items: center;
`;
export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 40vw;
  height: 60vw;
  z-index: -1;
  ${media.tablet`
    height: 80vw;
    width: 60vw;
  `};
  ${media.phablet`
    height: 120vw;
    width: 90vw;
  `};
`;
