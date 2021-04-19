import styled from 'styled-components';
import { media } from '@styles';

export const StyledSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;
export const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const ColItem = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: auto;
  min-height: 80vh;
`;
export const BigTitle = styled.h1`
  font-family: var(--font-family-serif);
  font-size: 20vw;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  line-height: 85%;
`;
export const SubTitle = styled.p`
  font-family: var(--font-family-serif);
  font-size: 7vw;
  white-space: nowrap;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  padding-top: 3vw;
  line-height: 85%;
`;
export const NumberWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 40%;
  z-index: 2;
`;
export const AboutText = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10vw;
  flex-direction: column;
  align-items: flex-end;
`;
export const ParaWrapper = styled.div`
  display: flex;
  max-width: ${props => (props.top ? '55.5%' : '90%')};
  flex-direction: column;
`;
export const NormalText = styled.p`
  font-size: 3.25vw;
  line-height: 110%;
  margin: 0;
`;
export const CaptionText = styled.small`
  font-size: 1.2vw;
  color: var(--accent);

  ${media.tablet`font-size: 14px;`};
`;
export const SplitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  max-width: 90%;
`;
