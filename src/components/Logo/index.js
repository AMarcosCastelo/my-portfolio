import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from "./styled";

const Logo = () => {
  const { logoImage } = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: {eq: "AM-3.png"}) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <S.LogoWrapper fluid={logoImage.childImageSharp.fluid} />
  );
};

export default Logo;
