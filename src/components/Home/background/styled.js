import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.div`
  position: relative;
  top: 0;
  width: 100vw;

  ${media.lessThan("large")`
    display: none;
  `}
`
