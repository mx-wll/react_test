/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import CardImage from "./cardimage"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description, 
          author
        }
      }
      allContentfulLink {
        edges {
          node {
            title
            url
          }
        }
      }
      allContentfulCard {
        edges {
          node {
            image {
              file {
                url
                fileName
                contentType
              }
              title
              description
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="wrapper">
        <main>
          {children}<br></br><br></br>
          <CardImage data={data}/>
        </main>
      </div>

      <Footer data={data}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout