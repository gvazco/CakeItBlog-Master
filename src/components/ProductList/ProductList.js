import React from "react"
import { Link } from "gatsby"
import { map } from "lodash"
import {
  Wrap,
  Grid,
  StyledImg,
  StyledH2,
  StyledReadMore,
} from "./productsList.styles"

export default function ProductList(props) {
  const { productos } = props

  return (
    <>
      <h1>Todos los productos</h1>
      <Grid className="productos-list">
        {map(productos, producto => (
          <div key={producto.id}>
            <div className="productos-list__item">
              <Link to={`/productos/${producto.slug}`}>
                <StyledImg
                  image={
                    producto.featuredImage.node.localFile.childImageSharp
                      .gatsbyImageData
                  }
                />
              </Link>
              <div className="item_description">
                <div>
                  <Link to={`/productos/${producto.slug}`}>
                    <StyledH2>{producto.title}</StyledH2>
                  </Link>
                </div>
                <div>
                  <Wrap>
                    <div
                      dangerouslySetInnerHTML={{ __html: producto.excerpt }}
                    />
                  </Wrap>
                  <StyledReadMore to={`/productos/${producto.slug}`}>
                    Leer más...
                  </StyledReadMore>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </>
  )
}
