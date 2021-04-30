import styled from 'styled-components';
import Img from 'gatsby-image';

export const SliderSection = styled.div`
  position: relative;
  padding-top: 10vw;
  padding-bottom: 5vw;
`;
export const SliderRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: absolute;
`;
export const ImageContainer = styled.div`
  width: 40vw;
  height: 37vh;
  margin-left: 5vw;
`;
export const StyledImage = styled(Img)`
  width: 100%;
  height: 100%;
`;
export const TextRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50vh;
`;
export const Col = styled.div`
  width: 42vw;
`;
