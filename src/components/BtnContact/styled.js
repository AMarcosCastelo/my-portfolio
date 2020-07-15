import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Btn = styled(AniLink)`
  height: 3.75rem;
  width: 20rem;
  transform: translateY(-50%);
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  margin-top: 10px;

  .shape {
    fill: transparent;
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 8px;
    stroke: var(--borders);
  }

  .text {
    color: var(--texts);
    font-size: 22px;
    letter-spacing: 4px;
    font-weight: bold;
    line-height: 32px;
    position: relative;
    top: -48px;
    transition: color ease-in 0.3s;
    ${media.lessThan("medium")`
      font-size: 16px;
    `};
  }

  &:hover .text {
    color: var(--highlight);
  }

  @keyframes draw {
    0% {
      stroke-dasharray: 140 540;
      stroke-dashoffset: -474;
      stroke-width: 8px;
    }
    100% {
      stroke-dasharray: 760;
      stroke-dashoffset: 0;
      stroke-width: 2px;
    }
  }

  &:hover .shape {
    animation: 0.5s draw ease-in-out forwards;
  }
`
