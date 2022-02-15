import React from "react"
import { useCtaFeatureAreaQuery } from "../../hooks/useCtaFeatureArea"
import { Wrapper } from "./CtaFeatureArea.styles"

import CtaFeature from "../CtaFeature/CtaFeature"

const CtaFeatureArea = () => {
  const { cta } = useCtaFeatureAreaQuery()

  return (
    <Wrapper data-aos="zoom-in">
      {new Array(3).fill("").map((element, i) => (
        <div>
          <CtaFeature
            key={i + Math.random()}
            image={
              cta.ACF_HomePage[`ctaFeature${i + 1}Image`].localFile
                .childImageSharp.gatsbyImageData
            }
            link={cta.ACF_HomePage[`ctaFeature${i + 1}Link`]}
            text={cta.ACF_HomePage[`ctaFeature${i + 1}Text`]}
          />
        </div>
      ))}
    </Wrapper>
  )
}

export default CtaFeatureArea
