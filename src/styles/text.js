import React from 'react';
import styled from 'styled-components';
import media from './media';

const ParaWrapper = styled.div`
  font-size: 2vw;
  ${media.tablet`font-size: 16px;`};
`;
const Paragraph = styled.p`
  text-indent: 3vw;
  line-height: 110%;
  margin: 0;

  ${media.tablet`line-height: 120%;`};
`;
const Number = styled.span`
  display: flex;
  padding-bottom: 1vw;
`;

export const ParaText = ({ number, children, ...rest }) => {
  return (
    <ParaWrapper {...rest}>
      <Number>{number}-</Number>
      <Paragraph>{children}</Paragraph>
    </ParaWrapper>
  );
};
