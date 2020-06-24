require("dotenv").config();
const queries = require('./src/utils/algolia-querys');

module.exports = {
  siteMetadata: {
    title: `Antonio Marcos`,
    description: `Meu portfólio e meu espaço para compartilhar conhecimento sobre a comunidade em volta do JS e do Desenvolvimento Front-End.`,
    author: `Antonio Marcos Castelo de Carvalho`,
    position: `Desenvolvedor Front-End`,
    siteUrl: `https://amarcoscastelo.com.br`
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `uploads`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // default: false
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antonio Marcos`,
        short_name: `AM`,
        start_url: `/`,
        background_color: `#242424`,
        theme_color: `#242424`,
        display: `minimal-ui`,
        icon: `src/images/AM-Ptr.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
