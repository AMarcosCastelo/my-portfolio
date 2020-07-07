import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"
import Squares from "../components/Squares"

const ContactPage = () => {
  const about = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title={about.site.siteMetadata.title}
        description={about.site.siteMetadata.description}
      />
      <Contact />
      <Squares />
    </Layout>
  )
}

export default ContactPage
