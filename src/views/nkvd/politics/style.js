import styled from 'styled-components';
import Img from 'gatsby-image';

export const PoliticsSection = styled.div`
  padding-top: 35vh;
`;
export const Line1 = styled.div`
  display: flex;
`;
export const ParaWrapper = styled.div`
  display: flex;
  max-width: ${props => (props.top ? '50%' : '90%')};
  flex-direction: column;
  ${props => props.bottom && `padding-bottom: 10vh;`};
`;
export const NormalText = styled.p`
  font-size: 3.25vw;
  line-height: 110%;
  margin: 0;
`;
export const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SecondLine = styled(FirstLine)`
  align-items: center;
`;
export const StyledImage = styled(Img)`
  width: 100%;
`;
export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 14vw;
  width: 35vw;
  z-index: -1;
`;
export const SpinningText = styled.div`
  font-size: 3vw;
  text-transform: uppercase;
`;
