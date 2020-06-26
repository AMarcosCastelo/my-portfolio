import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const HomeWrapper = styled.section`
  display: flex;
  padding: 2rem 1.4rem;
  justify-content: space-between;
  height: 100vh;
`;

export const HomeGroup = styled.div`
  padding: 4rem;
  width: 50rem;
`;

export const HomeTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem auto;
  color: var(--texts);
`;

export const HomeDescription = styled.p`
  color: var(--texts);
  font-size: 1.5rem;
  margin-bottom: 4rem;
`;

export const HomeImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100vh;
  padding-right: 4rem;
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
`;
