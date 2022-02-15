import { useStaticQuery, graphql } from "gatsby"

export const useCtaFeatureAreaQuery = () => {
  const data = useStaticQuery(graphql`
    fragment ctaImage on WpMediaItem {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 720, placeholder: TRACED_SVG)
        }
      }
    }

    query CtaFeatQuery {
      cta: wpPage(databaseId: { eq: 12 }) {
        ACF_HomePage {
          ctaFeature1Link
          ctaFeature1Text
          ctaFeature2Link
          ctaFeature2Text
          ctaFeature3Link
          ctaFeature3Text
          ctaFeature1Image {
            ...ctaImage
          }
          ctaFeature2Image {
            ...ctaImage
          }
          ctaFeature3Image {
            ...ctaImage
          }
        }
      }
    }
  `)

  return data
}
