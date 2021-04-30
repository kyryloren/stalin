import styled from 'styled-components';

export const AboutSection = styled.div`
  position: relative;
  padding-top: 20vw;
  padding-bottom: 20vw;
`;
export const Row = styled.div`
  display: flex;
  align-items: flex-end;
  height: fit-content;
  ${props => props.textTop && `justify-content: flex-end;`};
`;
export const ParaWrapper = styled.div`
  display: flex;
  max-width: ${props => (props.top ? '75%' : '80%')};
  flex-direction: column;
`;
export const NormalText = styled.p`
  font-size: 3.25vw;
  line-height: 110%;
  margin: 0;
`;
