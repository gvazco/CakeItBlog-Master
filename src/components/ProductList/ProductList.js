import React from "react"
import { Grid, Card, Icon, Image, Button } from "semantic-ui-react"
import { Link } from "gatsby"
import { map } from "lodash"
import { Wrap, GridStyled } from "./productsList.styles"
import "semantic-ui-css/semantic.min.css"

export default function ProductList(props) {
  const { productos } = props

  return (
    <GridStyled className="productos-list">
      {map(productos, producto => (
        <Grid.Column key={producto.id} mobile={16} tablet={16} computer={5}>
          <Card className="productos-list__item">
            <Link to={`/productos/${producto.slug}`}>
              <Image src={producto.featuredImage.node.localFile.publicURL} />
            </Link>
            <Card.Content>
              <Card.Header>
                <Link to={`/productos/${producto.slug}`}>{producto.title}</Link>
              </Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Wrap>
                <Card.Meta
                  dangerouslySetInnerHTML={{ __html: producto.excerpt }}
                />
              </Wrap>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </GridStyled>
  )
}
