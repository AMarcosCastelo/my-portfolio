import React from 'react';
import PropTypes from "prop-types";
import getThemeColor from "../../utils/getThemeColor";

import * as S from "./styled";

const PostItem = ({ slug, image, date, timeToRead, title, description}) => {

  return (
    <S.PostItemLink
      to={`/blog${slug}`}
      cover
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
    >
      <S.PostItemWrapper>
        {console.log(image)}
        <S.PostItemTag image={image}></S.PostItemTag>
        <S.PostItemInfo>
          <S.PostItemDate>{date} - {timeToRead} min de leitura</S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  );
};

PostItem.propItems= {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostItem;
