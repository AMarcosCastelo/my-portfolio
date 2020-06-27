import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const HomeWrapper = styled.section`
  display: flex;
  padding: 2rem 1.4rem;
  /* justify-content: space-between; */
  height: 100vh;
  z-index: 100;
  align-items: center;

  ${media.lessThan("large")`
    height: calc(100vh - 6rem);
  `}

  ${media.lessThan("small")`
    padding: 1rem;
    width: 100vw;
  `}

  ${media.lessThan("medium")`
    padding: 1rem;
    width: 100vw;
  `}
`;

export const HomeGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem;
  width: 50rem;
  height: calc(100vh - 6rem);
  z-index: 100;

  ${media.lessThan("medium")`
    padding: 1rem;
  `}
`;

export const HomeTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  color: var(--titleHome);
  z-index: 100;

  ${media.lessThan("small")`
    font-size: 1.7rem;
    margin: 1rem 0;
  `}

  ${media.lessThan("medium")`
    font-size: 2rem;
    margin: 0.4rem 0;
  `}
`;

export const HomeDescription = styled.p`
  color: var(--texts);
  font-size: 1.5rem;
  margin-bottom: 4rem;
  z-index: 100;

  ${media.lessThan("small")`
    font-size: 1rem;
    margin: 2rem 0;
  `}  
`;

export const HomeImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  padding-right: 4rem;
  z-index: 100;
  ${media.lessThan("large")`
    display: none;
  `}
`;

export const ImageBox = styled.div`
  width: 100%;
`;

export const HomeImage = styled(Img)`
  display: block;
  max-width: 620px;
  margin: auto;
  z-index: 100;
`;
