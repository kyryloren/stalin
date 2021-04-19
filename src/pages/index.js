/* eslint react/jsx-pascal-case: 0 */
import React from 'react';
import { graphql } from 'gatsby';

import { Hero, FiveYearPlan, Purge, Propaganda, NKVD, Transition } from '@views';

const HomePage = ({ data }) => {
  return (
    <>
      <Hero data={data} />
      <div id="economy">
        <FiveYearPlan data={data} />
      </div>
      <div id="purge">
        <Purge data={data} />
      </div>
      <Propaganda data={data} />
      <Transition data={data} />
      <div id="nkvd">
        <NKVD data={data} />
      </div>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
    </>
  );
};

export default HomePage;

export const query = graphql`
  {
    stalin: file(relativePath: { eq: "stalin.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fyp_people: file(relativePath: { eq: "fiveyearplan/people.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fyp_poster1: file(relativePath: { eq: "fiveyearplan/poster1.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fyp_poster2: file(relativePath: { eq: "fiveyearplan/poster2.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fyp_poster3: file(relativePath: { eq: "fiveyearplan/poster3.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    purge_people: file(relativePath: { eq: "purge/people.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    purge_rubble: file(relativePath: { eq: "purge/rubble.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    purge_soldiers: file(relativePath: { eq: "purge/soldiers.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    prop_poster1: file(relativePath: { eq: "propaganda/poster1.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    prop_poster2: file(relativePath: { eq: "propaganda/poster2.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    prop_poster3: file(relativePath: { eq: "propaganda/poster3.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    prop_poster4: file(relativePath: { eq: "propaganda/poster4.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    prop_poster5: file(relativePath: { eq: "propaganda/poster5.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    prop_poster6: file(relativePath: { eq: "propaganda/poster6.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    trans_image1: file(relativePath: { eq: "transition/image1.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    trans_image2: file(relativePath: { eq: "transition/image2.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    trans_image3: file(relativePath: { eq: "transition/image3.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    nkvd_police1: file(relativePath: { eq: "nkvd/police1.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    nkvd_police2: file(relativePath: { eq: "nkvd/police2.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    nkvd_police3: file(relativePath: { eq: "nkvd/police3.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    nkvd_police4: file(relativePath: { eq: "nkvd/police4.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    nkvd_police5: file(relativePath: { eq: "nkvd/police5.png" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
