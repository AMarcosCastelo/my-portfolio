import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';

import * as S from "./styled";

const Profile = ({ profileTitle }) => {
  const {site : {
    siteMetadata: {title }
  }} = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <S.ProfileAvatar>
        <Avatar />
      </S.ProfileAvatar>
      <S.ProfileAuthor>
        {console.log(profileTitle)}
        {profileTitle ? profileTitle : title}
      </S.ProfileAuthor>
    </S.ProfileWrapper>
  );
};

export default Profile;
