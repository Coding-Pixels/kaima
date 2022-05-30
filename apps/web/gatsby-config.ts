import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Marketing Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "vMzPxNI0QNYWIsHZNGD9VqKnkai99WiWCUoi7cgU7Is",
      "spaceId": "3mkfjhyitno4"
    }
  }, "gatsby-plugin-emotion"]
};

export default config;
