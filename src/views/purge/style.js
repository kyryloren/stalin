import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;
  width: auto;
`;
export const NumberWrapper = styled.div`
  position: absolute;
  top: 55%;
  left: 10%;
  z-index: 2;
`;
export const BigTitleText = styled.h1`
  font-family: var(--font-family-serif);
  font-size: 30vw;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  line-height: 95%;
`;
export const SplitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
`;
