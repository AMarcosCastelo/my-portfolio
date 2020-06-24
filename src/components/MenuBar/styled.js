import styled from "styled-components";
import { Link } from "gatsby";

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
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
  display: block;
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
