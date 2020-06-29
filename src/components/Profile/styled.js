import styled from 'styled-components';
import media from 'styled-media-query';

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}

  ${media.lessThan("small")`
    padding: 2rem 0 0 0;
  `}
`;

export const ProfileAvatar = styled.div`
  padding: 0 3rem;
`;

export const ProfileAuthor = styled.h1`
  font-size: 3.6rem;
  color: var(--titleHome);
  /* margin: 0.5rem auto 1.5rem; */
  ${media.lessThan("small")`
    font-size: 2.5rem;
  `}
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 2rem;
  font-weight: 300;
  margin-top: 1rem;
`;
