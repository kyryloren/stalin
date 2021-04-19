import styled from 'styled-components';
import { SplitWrapper, Row } from '../style';
import Img from 'gatsby-image';

export const SecondPanel = styled.div`
  display: flex;
  width: 340vw;
`;
export const StyledImage = styled(Img)`
  position: relative;
  width: ${props => (props.secondImage ? '45vw' : '80vw')};
  height: 100%;
  margin-top: -3vw;
`;
export const ParagraphWrapper = styled.div`
  width: 40vw;

  :first-child {
    margin-right: 5vw;
  }
`;
export const StyledSplitWrapper = styled(SplitWrapper)`
  margin-left: 5vw;
`;
export const StyledRow = styled(Row)`
  margin: 0 10vw;
`;
