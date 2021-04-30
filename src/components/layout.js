import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Power4, gsap } from 'gsap';
import { StaticQuery, graphql } from 'gatsby';
import { Head, SmoothScroll, ThemeProvider, Nav, Loader, Footer, MobileWrapper } from '@components';
import { GlobalStyle } from '@styles';

const Layout = ({ children, location }) => {
  const [loaded, setLoaded] = useState(false);
  let tl = gsap.timeline();
  let sectionContainer = useRef(null);

  useEffect(() => {
    if (loaded && sectionContainer) {
      tl.fromTo(
        sectionContainer,
        { opacity: 0 },
        { opacity: 1, ease: Power4.easeInOut, duration: 0.4 },
      );
    }
  }, [tl, loaded, sectionContainer]);

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

          <ThemeProvider>
            <GlobalStyle />
            {loaded ? (
              <>
                <MobileWrapper location={location.pathname} />
                <main key={location.pathname} ref={el => (sectionContainer = el)}>
                  <Nav />
                  {children}
                  <Footer />
                </main>
              </>
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
