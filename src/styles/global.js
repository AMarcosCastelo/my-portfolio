import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    -webkit-font-smoothing: antialiased !important;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    background: var(--background);
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  * {
    outline: none;
    box-sizing: border-box;
  }

  body.dark {
    --borders: #bdbdbd;
    --texts: #bdbdbd;
    --postColor: #fff;
    --highlight: #08FDD8;
    --highlightPost: #08FDD8;
    --titlesText: #08FDD8;
    --colorHoverBtn: #222;
    --mediumBackground: #333333;
    --menuBarColor: #333333;
    --background: #242424;
    --white: #fff;
    --black: #222;
    --titleHome: #fff;
  }

  body.light { 
    --borders: #242424;
    --texts: #555;
    --postColor: #fff;
    --highlight: #08FDD8;
    --highlightPost: #08FDD8;
    --titlesText: #08FDD8;
    --colorHoverBtn: #242424;
    --mediumBackground: #333333;
    --menuBarColor: #bdbdbd;
    --background: #fff;
    --white: #fff;
    --black: #222;
    --titleHome: #555;
  }
`

export default GlobalStyles
