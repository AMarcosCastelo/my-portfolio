import React from 'react';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contato" />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
