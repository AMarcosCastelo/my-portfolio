import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from "./styled";

const Logo = () => {
  const { logoImage } = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: {eq: "AM-Ptr.png"}) {
        childImageSharp {
          fixed(width: 44, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <S.LogoWrapper fixed={logoImage.childImageSharp.fixed} />
  );
};

export default Logo;
