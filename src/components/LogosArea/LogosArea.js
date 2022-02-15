import React from "react"
import { useLogosQuery } from "../../hooks/useLogosQuery"
import { Wrapper } from "./LogosArea.styles"
import Slider from "react-slick"

import Logo from "../Logo/Logo"

const LogosArea = () => {
  const { logo } = useLogosQuery()

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
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
    <Wrapper data-aos="zoom-in">
      <h1>Nuestros Clientes</h1>
      <Slider {...settings}>
        {new Array(12).fill("").map((element, i) => (
          <div>
            <Logo
              key={i + Math.random()}
              image={
                logo.ACF_HomePage[`logo${i + 1}Image`].localFile.childImageSharp
                  .gatsbyImageData
              }
            />
          </div>
        ))}
      </Slider>
    </Wrapper>
  )
}

export default LogosArea
