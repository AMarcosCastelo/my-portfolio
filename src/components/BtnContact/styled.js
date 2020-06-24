import styled from 'styled-components';
import { Link } from 'gatsby';

export const Btn = styled(Link)`
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
