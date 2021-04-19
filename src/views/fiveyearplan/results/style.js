import styled from 'styled-components';
import Img from 'gatsby-image';

export const ResultsSection = styled.div`
  padding-top: 25vh;
  padding-bottom: 35vh;
  position: relative;
`;
export const Row = styled.div`
  position: relative;
  display: flex;
`;
export const TopRow = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  flex-direction: column;
`;
export const Col = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${props => (props.image ? '55%' : '45%')};

  :last-child {
    padding-left: 3.1vw;
  }

  div :last-child {
    padding-top: 4vw;
  }
`;
export const BigTitle = styled.h1`
  font-family: var(--font-family-serif);
  font-size: 20vw;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  line-height: 85%;
`;
export const NormalText = styled.p`
  position: relative;
  font-size: 2.5vw;
  line-height: 110%;
  margin: 0;
`;
export const StyledImage = styled(Img)`
  position: relative;
  width: 55%;
`;
export const TopImage = styled.div`
  position: relative;
  display: flex;
  z-index: -2;
  margin-top: -35%;
`;
export const BottomImage = styled.div`
  position: relative;
  display: flex;
  z-index: -1;
  width: 100%;
  justify-content: flex-end;
  margin-top: -80%;
`;
export const HalfRow = styled(Row)`
  padding-top: 5vh;
  justify-content: space-between;
`;
export const HalfCol = styled.div`
  width: 45%;
`;
