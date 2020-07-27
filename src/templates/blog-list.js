import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { itemsBlogAnimate } from "../utils/animations"

import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../components/Blog/styled"

const BlogList = props => {
  const itemsPost = []
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blog/" : `blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  useEffect(() => {
    itemsBlogAnimate(itemsPost)
  }, [])

  return (
    <Layout>
      <SEO title="Blog" />
      <S.BlogWrapper>
        <S.Title>Blog Posts</S.Title>
        {postList.map(
          (
            {
              node: {
                frontmatter: { background, category, title, date, image },
                timeToRead,
                fields: { slug },
                excerpt,
              },
            },
            index
          ) => (
            <div ref={element => (itemsPost[index] = element)} key={index}>
              <PostItem
                slug={slug}
                background={background}
                category={category}
                image={image}
                date={date}
                timeToRead={timeToRead}
                title={title}
                excerpt={excerpt}
              />
            </div>
          )
        )}
      </S.BlogWrapper>
      {/* <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      /> */}
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
      filter: { fields: { slug: { ne: "/about/" } } }
    ) {
      edges {
        node {
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            image
          }
          timeToRead
          fields {
            slug
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`

export default BlogList
