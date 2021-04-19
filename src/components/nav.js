import React from 'react';
import styled from 'styled-components';
import { ThemeContext, Toggle } from '@components';
import { media } from '@styles';

const HeaderWrap = styled.header`
  padding: 3vw 3vw 5vw;
  z-index: 9999;
`;
const NavWrap = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const NavLink = styled.a`
  font-size: 1vw;
  text-transform: uppercase;
  transition: opacity 0.3s ease-out;
  cursor: pointer;
  ${media.tablet`font-size: 14px;`}

  :not(:first-child) {
    margin-left: 2vw;
  }

  :hover {
    opacity: 0.7;
  }
`;
const TogglerWrapper = styled.div`
  z-index: 999;

  label {
    cursor: pointer;

    input {
      display: none;
    }
    padding: 1rem;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: var(--text);
  }
`;

const Nav = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  function scrollToSection(section) {
    if (window !== 'undefined') {
      window.scroll.scrollTo(document.querySelector(`#${section}`));
    }
  }

  return (
    <HeaderWrap>
      <NavWrap>
        <div />
        <div>
          <NavLink onClick={() => scrollToSection('personality')}>Cult of Personality</NavLink>
          <NavLink onClick={() => scrollToSection('purge')}>Great Purge</NavLink>
          <NavLink onClick={() => scrollToSection('nkvd')}>NKVD</NavLink>
          <NavLink onClick={() => scrollToSection('economy')}>Economy</NavLink>
          <NavLink onClick={() => scrollToSection('propaganda')}>Propaganda</NavLink>
        </div>
        <TogglerWrapper>
          <label>
            <input
              type="checkbox"
              onChange={ev => {
                setColorMode(ev.target.checked ? 'dark' : 'light');
              }}
              checked={colorMode === 'dark'}
            />
            {colorMode === 'dark' ? <Toggle name="sun" /> : <Toggle name="moon" />}
          </label>
        </TogglerWrapper>
      </NavWrap>
    </HeaderWrap>
  );
};

export default Nav;
