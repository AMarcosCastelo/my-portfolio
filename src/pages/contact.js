import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"
import Squares from "../components/Squares"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contato"
      description="Entre em contato comigo!"
    />
    <Contact />
    <Squares />
  </Layout>
)

export default ContactPage
