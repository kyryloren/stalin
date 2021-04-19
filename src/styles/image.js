import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const ImageAnim = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--background);
  z-index: 1;
  transform-origin: center bottom;
  height: 100%;
`;
export const StyledImage = styled(BackgroundImage)`
  position: absolute;
  background-size: cover;
  top: 0;
  left: -5%;
  right: -5%;
  bottom: -5%;
`;
