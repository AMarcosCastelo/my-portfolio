import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BtnContact from '../BtnContact';

import * as S from "./styled";

const ImgLogo = () => {
  const { imgLogo } = useStaticQuery(graphql`
    query {
      imgLogo: file(relativePath: {eq: "AM-2.png"}) {
        childImageSharp {
          fluid(maxWidth: 503, maxHeight: 394) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <S.HomeImage fluid={imgLogo.childImageSharp.fluid} />
  );
};

const Home = () => {
  return (
    <S.HomeWrapper>
      <S.HomeGroup>
        <S.HomeTitle>Olá, <br/> eu sou Antonio Marcos, <br/>  Desenvolvedor Web <br/> Front End</S.HomeTitle>
        <S.HomeDescription>Desenvolvedor Front-End | Freelancer</S.HomeDescription>
        <BtnContact />
      </S.HomeGroup>
      <S.HomeImageWrapper>
        <S.ImageBox>
          <ImgLogo />
        </S.ImageBox>
      </S.HomeImageWrapper>
    </S.HomeWrapper>
  );
}

export default Home;
