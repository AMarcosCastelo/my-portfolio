import React from 'react';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Contact from "../components/Contact";
import Squares from '../components/Squares';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contato" />
      <Contact />
      <Squares />
    </Layout>
  );
};

export default ContactPage;
