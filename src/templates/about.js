import React from 'react';
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Profile from "../components/Profile";

import * as S from "../components/About/styled";

const AboutPage = ({ data }) => {
  const about = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={about.frontmatter.title}
        description={about.frontmatter.description}
        image={about.frontmatter.image}
      />
      <S.AboutHeader>
        <Profile profileTitle={about.frontmatter.title} />
      </S.AboutHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{__html: about.html}}></div>
      </S.MainContent>
    </Layout>
  );
};

export const query = graphql`
  query About($slug: String!) {
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
    }
  }
`;

export default AboutPage;
