import React, { useEffect } from "react"
import { Card, Icon, Image, Button } from "semantic-ui-react"
import { Link } from "gatsby"
import { map } from "lodash"
import { Wrap, Grid } from "./productsList.styles"

export default function ProductList(props) {
  const { productos } = props

  return (
    <Grid className="productos-list">
      {map(productos, producto => (
        <div key={producto.id}>
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
        </div>
      ))}
    </Grid>
  )
}
