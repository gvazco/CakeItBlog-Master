import React from "react"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import { Wrapper } from "./CTAArea.styles"
import Slider from "react-slick"

import CTA from "../CTA/CTA"

const CTAArea = () => {
  const { cta } = useCTAAreaQuery()

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Wrapper>
      <Slider {...settings}>
        {new Array(3).fill("").map((element, i) => (
          <div>
            <CTA
              key={i}
              image={
                cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp
                  .gatsbyImageData
              }
              link={cta.ACF_HomePage[`cta${i + 1}Link`]}
              text={cta.ACF_HomePage[`cta${i + 1}Text`]}
            />
          </div>
        ))}
      </Slider>
    </Wrapper>
  )
}

export default CTAArea
