import React from 'react';
import propTypes from "prop-types";

import { LeftArrowAlt as Left } from "@styled-icons/boxicons-regular/LeftArrowAlt";
import { RightArrowAlt as Right } from "@styled-icons/boxicons-regular/RightArrowAlt";

import * as S from "./styled";
import getThemeColor from '../../utils/getThemeColor';

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        to={`/blog${previous.fields.slug}`}
        className="previous"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Left size={30} />
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}

    {next && (
      <S.RecommendedLink
        to={`/blog${next.fields.slug}`}
        className="next"
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
      >
        {next.frontmatter.title}
        <Right size={30} />
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
);

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    }),
  }),
}

export default RecommendedPosts;
