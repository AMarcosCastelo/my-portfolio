import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  max-width: 950px;
  margin: 0 auto;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  align-items: flex-start;
  display: flex;
  padding: 2rem 0;
  width: 100%;

  ${media.lessThan("large")`
    padding: 1rem;
  `}

  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  `}

  ${media.lessThan("small")`
    padding: 2rem 1rem;
  `}
`

export const PostItemTag = styled.div`
  align-items: center;
  background-image: ${props =>
    props.image ? `url(${props.image})` : `url('/assets/img/volcano.jpg')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 4px;
  color: var(--white);
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 170px;
  min-width: 300px;
  text-transform: uppercase;

  ${media.lessThan("medium")`
    width: 100%;
    min-height: 200px;
    margin-bottom: 10px;
    border-radius: 10px;
  `}

  ${media.lessThan("small")`
    min-height: 200px;
  `}
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  ${media.lessThan("medium")`
    margin: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  margin-top: 1rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.9rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
