import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const Btn = styled(AniLink)`
  cursor: pointer;
  text-align: center;
  padding: 1rem 1.75rem;
  background: transparent;
  border: 1px solid var(--borders);
  color: var(--texts);
  font-weight: bold;
  width: 15rem;
  text-decoration: none;
  transition: background 0.5s;

  &:hover {
    background: var(--highlight);
    color: var(--colorHoverBtn);
  }
`;
