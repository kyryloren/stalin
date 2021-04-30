import React from 'react';
import styled from 'styled-components';
import { Container } from '@styles';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100vh;
  background-color: var(--footer);
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props => props.bottom && `padding: 20vh 0 5vw;`};
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const LinksList = styled.ul`
  padding: 0;
  margin: 0;
`;
const LinkWrapper = styled.li`
  list-style: none;
  padding: 0 0 1vw;
  margin: 0;
`;
const BigTitle = styled.h1`
  font-family: var(--font-family-serif);
  font-size: 16vw;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  white-space: nowrap;
  line-height: 85%;
`;
const StyledLink = styled.a`
  position: relative;
  font-size: 2vw;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;

  :before {
    content: '';
    display: block;
    position: absolute;
    bottom: 5%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transition: transform 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  }
  :before {
    transition-delay: 0s;
    transform: scaleX(0);
    transform-origin: left;
  }
  :hover:before {
    transform: scaleX(1);
  }
`;
const SmallText = styled.p`
  position: relative;
  font-size: 2vw;
  margin: 0;
`;
const BoldTitle = styled(SmallText)`
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col>
            <BigTitle>Thanks for</BigTitle>
            <BigTitle>scrolling</BigTitle>
          </Col>
          <Col>
            <LinksList>
              <LinkWrapper>
                <BoldTitle>Sources used</BoldTitle>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.history.com/topics/russia/joseph-stalin"
                  target="_blank"
                  rel="noopener noreferrer">
                  History.com
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.rferl.org/a/27774611.html"
                  target="_blank"
                  rel="noopener noreferrer">
                  rferl.com
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.crimemuseum.org/crime-library/international-crimes/stalins-security-force"
                  target="_blank"
                  rel="noopener noreferrer">
                  crimemuseum.org
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://study.com/academy/lesson/stalins-five-year-plans-collectivization-industrialization.html"
                  target="_blank"
                  rel="noopener noreferrer">
                  study.com
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.pbs.org/redfiles/prop/inv/prop_inv_ins.htm"
                  target="_blank"
                  rel="noopener noreferrer">
                  pbs.org
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.britannica.com/event/Great-Purge"
                  target="_blank"
                  rel="noopener noreferrer">
                  britannica.com
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.loc.gov/exhibits/archives/intn.html"
                  target="_blank"
                  rel="noopener noreferrer">
                  loc.gov
                </StyledLink>
              </LinkWrapper>
            </LinksList>
          </Col>
        </Row>
        <Row bottom>
          <SmallText>&copy; 2021</SmallText>
          <div>
            <StyledLink
              href="https://kyryloorlov.com?ref=stalin"
              target="_blank"
              rel="noopener noreferrer">
              Website by Kyrylo
            </StyledLink>
          </div>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
