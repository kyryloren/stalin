import styled from 'styled-components';
import Img from 'gatsby-image';

export const CloseSection = styled.div`
  padding-top: 20vh;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};

  :last-child {
    justify-content: flex-end;
  }
`;
export const TopImage = styled.div`
  width: 55%;
  z-index: 1;
`;
export const BottomImageWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const BottomImage = styled.div`
  position: relative;
  width: 75%;
  margin-top: -10%;
  z-index: 2;
`;
export const StyledImage = styled(Img)`
  width: 100%;
`;
export const NormalText = styled.p`
  position: relative;
  font-size: 2.5vw;
  line-height: 110%;
  padding-left: 5.1vw;
  width: 45%;
  margin: 0;
`;
export const HalfCol = styled.div`
  width: 40%;
  margin-top: 5.1vw;
  margin-right: 5.1vw;
`;
