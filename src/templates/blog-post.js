import React from 'react';
import { graphql } from "gatsby";

import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/Comments';
import Layout from "../components/Layout";
import SEO from "../components/seo";

import * as S from "../components/Post/styled";

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const previous = pageContext.nextPost && (pageContext.nextPost.fields.slug !== '/about/' ? pageContext.nextPost : false);
  const next= pageContext.previousPost && (pageContext.previousPost.fields.slug !== '/about/' ? pageContext.previousPost : false);

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} - {post.timeToRead} min de Leitura
        </S.PostDate>
        <S.PostTitle>
          {post.frontmatter.title}
        </S.PostTitle>
        <S.PostDescription>
          {post.frontmatter.description}
        </S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{__html: post.html}}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")   
        image     
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
