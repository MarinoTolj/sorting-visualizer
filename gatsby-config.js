module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Sorting Visualizer",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
