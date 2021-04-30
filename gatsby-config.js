require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Stalin's Rule In the USSR`,
    description: `Joseph Stalin was a revolutionary and the ruler of the Soviet Union. Stalin transformed the Soviet Union from a peasant society into a military superpower.`,
    siteUrl: 'https://stalin.kyryloorlov.com',
    image: '/og.png',
    twitterUsername: '@kyryloren',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-background-image`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#EAE4E4`,
        theme_color: `#121111`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
