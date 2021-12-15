import { useStaticQuery, graphql } from "gatsby"

export const useLogosQuery = () => {
  const data = useStaticQuery(graphql`
    fragment logoImage on WpMediaItem {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 720, placeholder: TRACED_SVG)
        }
      }
    }

    query LogoQuery {
      logo: wpPage(databaseId: { eq: 12 }) {
        ACF_HomePage {
          logo1Image {
            ...logoImage
          }
          logo2Image {
            ...logoImage
          }
          logo3Image {
            ...logoImage
          }
          logo4Image {
            ...logoImage
          }
          logo5Image {
            ...logoImage
          }
          logo6Image {
            ...logoImage
          }
        }
      }
    }
  `)

  return data
}
