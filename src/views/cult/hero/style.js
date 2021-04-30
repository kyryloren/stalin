import styled from 'styled-components';
import Img from 'gatsby-image';

export const HeroSection = styled.div`
  position: relative;
  height: 100vh;
`;
export const TitleWrapper = styled.div`
  position: absolute;

  ${props =>
    props.first &&
    `
    top: 30%;
    left: -80%;
  `}
  ${props =>
    props.second &&
    `
    top: 60%;
    left: 150%;
  `};
`;
export const BigTitle = styled.h1`
  font-family: var(--font-family-serif);
  font-size: 25vh;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  white-space: nowrap;
  line-height: 85%;
`;
export const ImageWrapper = styled.div`
  position: absolute;
  width: 22vw;
  height: 40vh;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
`;
export const StyledImage = styled(Img)`
  width: 100%;
  height: 100%;
`;
export const NumberWrapper = styled.div`
  position: absolute;
  top: 80%;
  left: -80%;
`;
