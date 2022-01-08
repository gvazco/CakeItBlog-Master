import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//Components
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import ProyectsSidebar from "../components/ProyectsSidebar/ProyectsSidebar"
import Pagination from "../components/Pagination/Pagination"

//Component Styles
import {
  Wrapper,
  ContentWrapper,
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
  Image,
  StyledImg,
} from "./archiveProyectos.styles"

const archiveProyectos = ({
  data: { allWpProyecto },
  pageContext: {
    catId,
    catName,
    catUri,
    categoriasProyectos,
    numPages,
    currentPage,
  },
}) => (
  <Layout>
    <StaticImage
      src="../images/archive_headerimage.png"
      placeholder="TRACED_SVG"
      layout="constrained"
      width={1920}
      height={300}
      alt="Galeria Image Post"
    />
    <Wrapper>
      <BreadCrumb
        parent={{
          uri: "/galeria/all-proyects",
          title: "galeria",
        }}
      />
      <ContentWrapper>
        <ProyectsSidebar
          catId={catId}
          categoriasProyectos={categoriasProyectos.edges}
        />
        <PageContent>
          <h1 dangerouslySetInnerHTML={{ __html: catName }} />
          <div className="productos-list">
            {allWpProyecto.edges.map(proyect => (
              <article key={proyect.node.id} className="entry-content">
                {proyect.node.featuredImage !== null ? (
                  <Image>
                    <Link to={proyect.node.uri}>
                      <StyledImg
                        image={
                          proyect.node.featuredImage.node.localFile
                            .childImageSharp.gatsbyImageData
                        }
                        alt="Galeria Image"
                      />
                    </Link>
                  </Image>
                ) : null}
                <div className="content">
                  <Link to={proyect.node.uri}>
                    <StyledH2
                      dangerouslySetInnerHTML={{ __html: proyect.node.title }}
                    />
                  </Link>

                  <StyledDate
                    dangerouslySetInnerHTML={{ __html: proyect.node.date }}
                  />
                  <p
                    dangerouslySetInnerHTML={{ __html: proyect.node.excerpt }}
                  />
                  <StyledReadMore to={proyect.node.uri}>
                    Leer más...
                  </StyledReadMore>
                </div>
                <div className="dot-divider" />
              </article>
            ))}
          </div>
          <Pagination
            catUri={catUri}
            page={currentPage}
            totalPages={numPages}
          />
        </PageContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
)

export default archiveProyectos

export const pageQuery = graphql`
  query ($catId: String!, $skip: Int!, $limit: Int!) {
    allWpProyecto(
      sort: { fields: date, order: DESC }
      filter: {
        categoriasProyectos: { nodes: { elemMatch: { id: { eq: $catId } } } }
      }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date(formatString: "DD MM YYYY")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 800, placeholder: TRACED_SVG)
                }
              }
            }
          }
        }
      }
    }
  }
`
