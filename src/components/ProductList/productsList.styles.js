import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
    width: 100%;
  }
`
export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 20px;
  color: #000;
  :hover {
    color: #ff6600;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .productos-list__item {
    width: 100% !important;
    box-shadow: 3px 3px 5px #999 !important;
    padding: 5px;
  }

  .item_description {
    padding: 10px;
  }
`

export const Wrap = styled.div`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 25px;
    max-height: 100px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 16px;
  }
`

export const StyledReadMore = styled(Link)`
  font-family: "Chub Gotic", sans-serif;
  font-size: 0.85rem;
  font-weight: 800;
  color: #000;
  position: relative;
  width: 120px;
  height: 35px;
  display: block;
  background: #fff;
  padding: 3px 0 0 10px;

  :hover {
    background: #ff6600;
    color: #fff;
  }
`
