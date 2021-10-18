import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  max-height: 600px;
  margin-bottom: 60px;
  width: 100%;
  filter: brightness(85%);
`

export const Wrapper = styled.div`
  position: relative;
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    text-align: center;
    font-family: "Teko", Arial, Helvetica, sans-serif;
    line-height: 80px;
    letter-spacing: 5px;
    text-shadow: #000 2px 2px 2px;
    width: 66%;
    text-align: center;
    font-weight: bold;
    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }
`
