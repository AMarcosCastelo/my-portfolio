import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from "./styled";
import getThemeColor from '../../utils/getThemeColor';

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
    <S.LogoLink
      to="/"
      cover
      direction="left"
      bg={getThemeColor()}
      duration={0.6}
      title="Home"
    >
      <S.LogoWrapper fixed={logoImage.childImageSharp.fixed} />
    </S.LogoLink>
  );
};

export default Logo;
