import styled from "styled-components";
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--menuBarColor);
  border-right: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.2rem 0;
  position: fixed;
  left: 0;
  width: 4.75rem;

  ${media.lessThan("large")`
    border-right: none;
    border-bottom: 1px solid var(--borders);
    top: 0;
    flex-direction: row;
    height: auto;
    padding: 0 1rem;
    width: 100%;
    justify-content: space-between;
  `}

  ${media.lessThan("medium")`
    justify-content: flex-end;
  `}
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`;

export const MenuBarLink = styled(AniLink)`
  display: block;

  &.active {
    color: var(--highlight) !important;
  }
`;

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 0.9rem;
  position: relative;
  width: 3.75rem;
  transition: color 0.5s;
  
  &:hover {
    color: var(--highlight);
  }
`;
