import React from "react"
import { Link } from "gatsby"
import { useLatestBlogPost } from "../../hooks/useLatestBlogPost"
import {
  Wrapper,
  StyledImg,
  Image,
  ImageTextWrapper,
  ImageText,
  Html,
} from "./LatesBlogPost.styles"
import { node } from "prop-types"

const LatestBlogPost = () => {
  const data = useLatestBlogPost()
  console.log(data)

  return (
    <Wrapper>
      <h1>Últimas Publicaciones</h1>

      <Image>
        <StyledImg
          image={
            data.allWpPost.edges[0].node.featuredImage.node.localFile
              .childImageSharp.gatsbyImageData
          }
          alt="Blog Image"
        />
        <Link to={data.allWpPost.edges[0].node.uri}>
          <ImageTextWrapper>
            <ImageText>
              <h1>{data.allWpPost.edges[0].node.title}</h1>
            </ImageText>
          </ImageTextWrapper>
        </Link>
      </Image>
      <Html
        dangerouslySetInnerHTML={{
          __html: data.allWpPost.edges[0].node.excerpt,
        }}
      />
      <Link to={`/blog${data.allWpPost.edges[0].node.uri}`}>
        <h5>Ver Más...</h5>
      </Link>
    </Wrapper>
  )
}

export default LatestBlogPost
