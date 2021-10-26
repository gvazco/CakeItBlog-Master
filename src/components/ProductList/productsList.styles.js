import styled from "styled-components"

// export const GridStyled = styled(Grid)`
//   .productos-list__item {
//     width: 100% !important;
//     box-shadow: 2px 2px 5px #999 !important;
//   }
// `

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px; */
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 20px;

@media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
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
