module.exports = {
  siteMetadata: {
    title: `Neo4j Community Center`,
    description: `By, For and About the Community`,
    siteUrl: `https://cc.neo4j.com`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-1192232-34",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "CommunityGraph",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "cg",
        // Url to query from
        url: "https://communityapi.neo4jlabs.com",
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
  ],
};
