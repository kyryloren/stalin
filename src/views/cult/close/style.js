import styled from 'styled-components';
import Img from 'gatsby-image';

export const AboutSection = styled.div`
  position: relative;
`;
export const Row = styled.div`
  display: flex;
  align-items: flex-end;
  height: fit-content;
  justify-content: flex-end;
  padding-top: 20vw;
`;
export const Col = styled.div`
  width: 50%;

  :first-child {
    padding-right: 5.1vw;
  }
  div :last-child {
    padding-top: 4vw;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  z-index: 1;
`;
export const StyledImage = styled(Img)`
  width: 100%;
`;
export const TopLine = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 35vw;
`;
export const SecondLine = styled.div`
  position: absolute;
  z-index: 2;
  top: 12vw;
  left: 27vw;
`;
export const ThirdLine = styled.div`
  z-index: 2;
  position: absolute;
  top: 24vw;
  left: 15vw;
`;
export const BigTitle = styled.h1`
  font-family: var(--font-family-serif);
  font-size: 14vw;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  white-space: nowrap;
  line-height: 85%;
  mix-blend-mode: difference;
`;
