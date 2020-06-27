import styled from "styled-components";
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--menuBarColor);
  border-right: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 1rem 0;
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
  `}
`;

export const MenuToggle = styled.div`
  ${media.lessThan("small")`
    align-items: center;
    background: var(--menuBarColor);
    position: fixed;
    top: 3.8rem;
    left: 100%;
    transition: all .3s linear;
    opacity: 0;
    width: 100%;
  `}

  ${media.greaterThan("small")`
    width: auto;
  `}

  &.show {
    background: var(--menuBarColor);
    left:0;
    opacity: 1;
    ${media.lessThan("small")`
      width: 100%;
    `}
  }
`;

export const MenuBarGroup = styled.div`
  color: var(--texts);
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
  `}

  ${media.lessThan("small")`
    justify-content: space-between;
  `}

  &#socialLinks {
    ${media.lessThan("medium")`
      display: none
    `}
  }

  &#menuIcon {
    display: none;
  }

  &#menuIcon {
    ${media.lessThan("small")`
      display: block;
    `}
  }
`;

export const MenuBarLink = styled(AniLink)`
  color: var(--texts);
  display: block;

  &.active {
    color: var(--highlight);
  }
`;

export const MenuBarItem = styled.span`
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
