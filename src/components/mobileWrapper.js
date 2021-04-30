import React, { useEffect } from 'react';
import { useWindowSize } from '@hooks';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 9997;
`;
const Text = styled.p`
  font-size: 6vw;
  max-width: 75%;
`;

const MobileWrapper = ({ location }) => {
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 481) {
      document.body.style.overflow = 'none';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [width, location]);

  if (width < 481) {
    return (
      <Wrapper>
        <Text>Rotate your device for a better experience.</Text>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default MobileWrapper;
