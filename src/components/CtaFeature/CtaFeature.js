import React from "react"
import { Link } from "gatsby"
import {
  StyledImg,
  CtaImage,
  CtaImageTextWrapper,
  CtaImageText,
} from "./CtaFeature.styles"

const CtaFeature = ({ image, link, text }) => (
  <CtaImage>
    <StyledImg image={image} alt="Cta Image" />
    <Link to={link}>
      <CtaImageTextWrapper>
        <CtaImageText>{text}</CtaImageText>
      </CtaImageTextWrapper>
    </Link>
  </CtaImage>
)

export default CtaFeature
