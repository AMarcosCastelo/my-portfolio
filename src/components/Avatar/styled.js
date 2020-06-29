import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  margin: auto;
  width: 200px;
  height: 200px;

  ${media.lessThan("small")`
    width: 150px;
    height: 150px;
  `}
`;
