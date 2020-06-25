import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* flex-direction: column; */
`;

export const ProfileAvatar = styled.div`
  padding: 0 3rem;
`;

export const ProfileAuthor = styled.h1`
  font-size: 3.6rem;
  /* margin: 0.5rem auto 1.5rem; */
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 2rem;
  font-weight: 300;
  margin-top: 1rem;
`;
