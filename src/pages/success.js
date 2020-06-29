import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import getThemeColor from '../utils/getThemeColor';

import Layout from "../components/Layout"
import SEO from "../components/seo";

const SuccessPages = () => {
  return (
    <Layout>
      <SEO title="Sucesso" />
      <SuccessWrapper>
        <SuccessMensage>
          <Title>Mensagen enviada com Sucesso</Title>
          <Btn
            to="/contact"
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}
          >Voltar</Btn>
        </SuccessMensage>
      </SuccessWrapper>
    </Layout>
  );
};


export const SuccessWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const SuccessMensage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: var(--titleHome);
  font-size: 2rem;
`;

export const Btn = styled(AniLink)`
  font-size: 1.7rem;
  color: var(--highlight);
  margin-top: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default SuccessPages;
