import React, { useState, useEffect } from "react"
import Logo from "../Logo"
import { Menu } from "@styled-icons/boxicons-regular/Menu"

import links from "./content"
import Icons from "./icons"
import SocialLinks from "../SocialLinks"
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const MenuBar = () => {
  const [, setTheme] = useState(null)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <>
      <S.MenuBarWrapper>
        <Logo />
        <S.MenuToggle className={showMenu && "show"}>
          <S.MenuBarGroup>
            {links.map((link, i) => {
              const Icon = Icons[link.name]

              return (
                <S.MenuBarLink
                  key={i}
                  to={link.url}
                  cover
                  direction="left"
                  bg={getThemeColor()}
                  duration={0.6}
                  activeClassName="active"
                  title={link.label}
                >
                  <S.MenuBarItem>
                    <Icon />
                  </S.MenuBarItem>
                </S.MenuBarLink>
              )
            })}
          </S.MenuBarGroup>
        </S.MenuToggle>
        <S.MenuBarGroup id="socialLinks">
          <SocialLinks />
        </S.MenuBarGroup>
        <S.MenuBarGroup id="menuIcon">
          <S.MenuBarItem onClick={() => setShowMenu(!showMenu)}>
            <Menu />
          </S.MenuBarItem>
        </S.MenuBarGroup>
      </S.MenuBarWrapper>
    </>
  )
}

export default MenuBar
