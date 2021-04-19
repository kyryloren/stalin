import styled from 'styled-components';
import Img from 'gatsby-image';

export const HeroSection = styled.div`
  padding-top: 35vh;
  background-color: var(--background);
  position: relative;
`;
export const NumberWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  z-index: 3;
`;
export const BigTitleText = styled.h1`
  font-family: var(--font-family-serif);
  font-size: 25vw;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  line-height: 95%;
`;
export const StyledImage = styled(Img)`
  width: 100%;
`;
export const TopImage = styled.div`
  position: absolute;
  width: 38%;
  top: 0;
  left: 0;
  z-index: 0;
`;
export const MiddleImage = styled.div`
  position: absolute;
  width: 33%;
  left: 35%;
  top: 15%;
  z-index: 1;
`;
export const BottomImage = styled.div`
  position: absolute;
  width: 33%;
  top: 0;
  right: 0;
  z-index: 2;
`;
export const Row = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 2;
  width: 100%;
  margin-top: 45%;
`;
export const TopText = styled.div``;
export const MiddleText = styled.div``;
export const BottomText = styled.div``;
