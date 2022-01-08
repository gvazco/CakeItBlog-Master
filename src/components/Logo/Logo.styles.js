import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
  }
`

export const CTAImage = styled.div`
  margin-bottom: 20px;
  max-height: 150px;
  position: relative;
  overflow: hidden;
  margin: 0 5px;
  img {
    transition: 0.3s ease-in;
    transform: scale(0.9);
  }

  @media (min-width: 768px) {
    width: 90%;
  }
`

export const CTAImageTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const CTAImageText = styled.p`
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;
  text-shadow: #000 2px 2px 2px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`
