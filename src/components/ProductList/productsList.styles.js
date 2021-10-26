import styled from "styled-components"
import { Grid } from "semantic-ui-react"

export const GridStyled = styled(Grid)`
  .productos-list__item {
    width: 100% !important;
    box-shadow: 2px 2px 5px #999 !important;
  }
`

export const Wrap = styled.div`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 25px;
    max-height: 100px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    font-size: 20px;
  }
`
