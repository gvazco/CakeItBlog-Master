import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
  }
`

export const Image = styled.div`
  margin-bottom: 20px;
  max-height: 100px;
  position: relative;
  overflow: hidden;

  img {
    transition: 0.3s ease-in;
  }

  :hover img {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    max-height: 600px;
    width: 100%;
  }
`

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

export const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`

export const PageContent = styled.article`
  margin: 20px 0 0 0;

  .dot-divider {
    width: 100%;
    height: 5px;
    margin-bottom: 20px;
    border-bottom: 1px solid lightgrey;
  }
`

export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  :hover {
    color: #f26e3b;
  }
`

export const StyledDate = styled.div`
  font-family: "Lato";
  font-size: 1.1rem;
  font-weight: 600;
`

export const StyledReadMore = styled(Link)`
  font-family: "Lato", Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  font-weight: 800;
  color: #000;
  position: relative;
  width: 90px;
  height: 30px;
  display: block;
  background: #fff;
  padding: 3px 0 0 10px;
  margin-bottom: 30px;

  :hover {
    background: #f26e3b;
    color: #fff;
  }
`
