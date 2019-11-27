import React from "react"
import { Link } from "gatsby"
import Card from "../components/card"
import ImgUpload from "../components/imgupload"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
      <h1>blablabla</h1>
      <Card
        title="this is a test1"
        text="there is some dummy text written1"
      />
      <Card
        title="this is a test2"
        text="there is some dummy text written2"
      />
      <Card
        title="this is a test3"
        text="there is some dummy text written3"
      />
    <Link to="/">Go to page 1</Link>

    <ImgUpload/>

  </Layout>
)

export default SecondPage
