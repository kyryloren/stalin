import styled from 'styled-components';

export const AboutSection = styled.div`
  position: relative;
  padding-top: 10vh;
`;
export const Row = styled.div`
  display: flex;
  width: 100%;

  ${props => props.pt && `padding-top: 10vh;`};

  ${props =>
    props.bottom &&
    `
    padding-top: 10vh;
    align-items: flex-end;
    flex-direction: column;
  `}
`;
export const Col = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.smaller ? 'flex-start' : 'flex-end')};
  width: 50%;
  height: ${props => (props.smaller ? '45vh' : '80vh')};

  :first-child {
    ${props => !props.reverse && `padding-right: 5.1vw;`}
  }
  div :last-child {
    ${props => !props.np && `padding-top: 4vw;`};
    ${props => props.reverse && `padding-left: 5.1vw;`}
  }
`;
