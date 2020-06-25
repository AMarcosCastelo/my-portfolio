require("dotenv").config();

const postsQuery =  `
  {
    posts: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {slug: {ne: "/about/"}}}) {
      edges {
        node {
          objectID: id
          frontmatter {
            category
            date_timestamp: date
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            background
          }
          excerpt(pruneLength: 5000)
          fields {
            slug
          }
        }
      }
    }
  }
`;

const flatten = (arr) =>
  arr.map(({node: {frontmatter, ...rest}}) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest
  }));

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // overrides main index name, optional
    settings: {
      // optional, any index settings
      attributesToSnippet: ['excerpt:20'],
    },
  },
];

module.exports = queries;
