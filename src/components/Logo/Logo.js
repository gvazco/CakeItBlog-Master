import React from "react"
import { StyledImg, CTAImage } from "./Logo.styles"

const Logo = ({ image }) => (
  <CTAImage>
    <StyledImg image={image} alt="CTA Image" />
  </CTAImage>
)

export default Logo
