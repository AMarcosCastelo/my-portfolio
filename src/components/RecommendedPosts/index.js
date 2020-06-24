import React from 'react';
import propTypes from "prop-types";

import { LeftArrowAlt as Left } from "@styled-icons/boxicons-regular/LeftArrowAlt";
import { RightArrowAlt as Right } from "@styled-icons/boxicons-regular/RightArrowAlt";

import * as S from "./styled";

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink to={previous.fields.slug} className="previous">
        <Left size={30} />
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}

    {next && (
      <S.RecommendedLink to={next.fields.slug} className="next">
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
