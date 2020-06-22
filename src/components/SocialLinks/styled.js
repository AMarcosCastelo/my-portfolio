import styled from "styled-components";

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const SocialLinksTitle = styled.h2`
  color: #DBDBDB;
  padding: 1rem;
  font-size: 1.32rem;
`;

export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
  color: #BDBDBD;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #08FDD8;
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`;
