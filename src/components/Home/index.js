import React, { useEffect } from "react"
import { TimelineMax } from "gsap"
import { useStaticQuery, graphql } from "gatsby"

import BtnContact from "../BtnContact"
import Squares from "../Squares"

import * as S from "./styled"

const ImgLogo = () => {
  const { imgLogo } = useStaticQuery(graphql`
    query {
      imgLogo: file(relativePath: { eq: "AM-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 503, maxHeight: 394) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <S.HomeImage fluid={imgLogo.childImageSharp.fluid} />
}

const Home = () => {
  useEffect(() => {
    const tl = new TimelineMax()

    tl.from("#title", 1, { opacity: 0, x: -200 }).from("#desc", 1, {
      opacity: 0,
      x: -200,
    })
  }, [])

  return (
    <>
      <S.HomeWrapper>
        <S.HomeGroup>
          <S.HomeTitle id="title">
            Olá, <br /> eu sou Antonio Marcos, <br /> Desenvolvedor Web <br />{" "}
            Front End
          </S.HomeTitle>
          <S.HomeDescription id="desc">
            Desenvolvedor Front-End | Freelancer
          </S.HomeDescription>
          <BtnContact id="btn" />
        </S.HomeGroup>
        <S.HomeImageWrapper>
          <S.ImageBox>
            <ImgLogo />
          </S.ImageBox>
        </S.HomeImageWrapper>
      </S.HomeWrapper>
      <Squares />
    </>
  )
}

export default Home
