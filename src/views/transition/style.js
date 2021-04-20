import styled from 'styled-components';
import Img from 'gatsby-image';

export const TransitionSection = styled.section`
  position: relative;
  height: 100vh;
`;
export const StyledImage = styled(Img)`
  width: 100%;
  height: 100%;
`;
export const ImageOne = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  width: 45vw;
  height: 50vh;
`;
export const ImageTwo = styled.div`
  position: absolute;
  top: 0;
  right: 10%;
  z-index: 3;
`;
export const ImageTwoWrap = styled.div`
  width: 45vw;
  height: 50vh;
`;
export const ImageThree = styled.div`
  position: absolute;
  top: 35%;
  right: 5%;
  width: 45vw;
  height: 50vh;
`;
