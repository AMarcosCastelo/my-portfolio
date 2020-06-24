import styled from "styled-components";

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`;

export const SocialLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

// export const SocialLinksTitle = styled.h2`
//   color: #DBDBDB;
//   padding: 1rem;
//   font-size: 1.32rem;
// `;

export const SocialLinksItem = styled.li`
  padding: 0.2rem;
`;

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;

export const IconWrapper = styled.div`
  fill: #242424;
  width: 30px;
  height: 30px;
`;
