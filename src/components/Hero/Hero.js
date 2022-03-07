import React from "react"
import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { useHeroQuery } from "../../hooks/useHeroQuery"
import {
  Wrapper,
  HeaderWrapper,
  StyledImg,
  FrontImg,
  FrontText,
} from "./Hero.styles"

const Hero = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery()

  const imageData = getImage(data.heroImage.localFile)
  const frontImg = getImage(data.herofrontimage.localFile)
  const frontText = getImage(data.herotextimage.localFile)

  return (
    <Wrapper>
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <StyledImg image={imageData} alt="Hero Image"></StyledImg>
      </div>

      <HeaderWrapper>
        <div
          className="fronText"
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="320"
          data-aos-duration="300"
          data-aos-easing="ease-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <FrontText image={frontText} alt="Hero Text" />
          <Link to="/fichas_tecnicas/casetas-de-multypanel/">
            <button>Ver más...</button>
          </Link>
        </div>

        <div
          className="fronImage"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="260"
          data-aos-duration="300"
          data-aos-easing="ease-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <FrontImg image={frontImg} alt="Hero Image" />
        </div>
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Hero
