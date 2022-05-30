import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Marketing Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.GATSBY_CMS_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_CMS_SPACE_ID,
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
  ],
};

export default config;
