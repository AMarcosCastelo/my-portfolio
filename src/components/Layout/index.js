import React from "react";
import PropTypes from "prop-types";
import MenuBar from "../MenuBar";
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import GlobalStyles from "../../styles/global";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
      <S.LayoutMain isHome={children[0].props.title === 'Home'}>
        {children}
      </S.LayoutMain>
    </S.LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
