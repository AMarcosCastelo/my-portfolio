import React from 'react';
// import Logo from '../Logo';

import { Home } from "@styled-icons/entypo/Home";
import { User } from "@styled-icons/boxicons-solid/User";
import { Blog } from "@styled-icons/icomoon/Blog";
// import { LightUp } from "@styled-icons/entypo/LightUp";
import { LightDown } from "@styled-icons/entypo/LightDown";
import { ContactMail as Contact } from "@styled-icons/material/ContactMail";
import { SearchAlt as Search } from "@styled-icons/boxicons-regular/SearchAlt";

import * as S from "./styled";

const MenuBar = () => {
  return (
    <S.MenuBarWrapper>
      {/* <Logo /> */}
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Voltar para a Home">
            <S.MenuBarItem><Home /></S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/about" title="Sobre mim">
            <S.MenuBarItem><User /></S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/blog" title="Blog">
            <S.MenuBarItem><Blog /></S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/contact" title="Contato">
            <S.MenuBarItem><Contact /></S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem title="Mudar o tema">
          <LightDown />
        </S.MenuBarItem>
        <S.MenuBarItem title="Mudar visualização">
          <Search />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
