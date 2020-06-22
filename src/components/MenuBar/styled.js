import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: #08FDD8;
  border-bottom: 1px solid #38444d;
  display: flex;
  width: 100vw;
  justify-content: space-between;
  padding: 0.8rem 1.2rem;
  position: fixed;
  right: 0;
  top: 0;
  height: 3.75rem;
`

export const MenuBarGroup = styled.div`
  display: flex;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: #333333;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  &:hover {
    color: #1fa1f2;
  }
`