/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TimelineLite, Power4 } from 'gsap';
import { StaticQuery, graphql } from 'gatsby';
import { Head, SmoothScroll, ThemeProvider, Nav, Loader } from '@components';
import { GlobalStyle } from '@styles';

const Layout = ({ children, location }) => {
  const [loaded, setLoaded] = useState(false);
  let tl = new TimelineLite();
  let sectionContainer = useRef(null);

  useEffect(() => {
    if (loaded) {
      tl.fromTo(
        sectionContainer,
        { opacity: 0 },
        { opacity: 1, ease: Power4.easeInOut, duration: 0.4 },
      );
    }
  }, [loaded]);

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={site => (
        <>
          <Head metadata={site.site.siteMetadata} />
          <SmoothScroll callbacks={location} />
          {/* <Cursor /> */}

          <ThemeProvider>
            <GlobalStyle />
            {loaded ? (
              <main key={location.pathname} ref={el => (sectionContainer = el)}>
                <Nav />
                {children}
              </main>
            ) : (
              <Loader setLoaded={setLoaded} />
            )}
          </ThemeProvider>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
