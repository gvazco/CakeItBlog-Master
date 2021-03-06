import React from "react"
import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import CTAArea from "../components/CTAArea/CTAArea"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"
import LogosArea from "../components/LogosArea/LogosArea"
import About from "../components/About/About"

const IndexPage = () => (
  <Layout>
    <Seo title="Inicio" />
    <Hero />
    <CTAArea />
    <LatestBlogPost />
    <LogosArea />
    <About />
  </Layout>
)

export default IndexPage
