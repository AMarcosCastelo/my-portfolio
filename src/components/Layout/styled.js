import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`;

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 0 0 4rem;
  width: 100%;

  ${media.lessThan("large")`
    padding: 3.925rem 0 0 0;
  `}
`;
