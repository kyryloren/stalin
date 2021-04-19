import styled from 'styled-components';

export const AboutSection = styled.div`
  padding-top: 25vh;
`;
export const Row = styled.div`
  display: flex;
`;
export const Col = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;
  height: 80vh;

  :last-child {
    padding-left: 5.1vw;
  }
  div :last-child {
    padding-top: 4vw;
  }
`;
