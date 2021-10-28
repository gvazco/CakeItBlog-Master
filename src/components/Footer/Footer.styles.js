import styled from "styled-components"

export const Credits = styled.div`
  color: #fff;
  background: #0c0c0c;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 30px;
  font-family: "Teko", Arial, Helvetica, sans-serif;
`

export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
`
export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-align: space-between;
  background: #212121;
  color: #fff;
  max-height: 1350px;
  padding: 50px 0;

  p {
    margin: 0;
    padding: 0;
  }

  

  .listing {
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  list-style:none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px; */
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 25px;
  text-align: center;

    li li{
    font-size:20px;
      a{
        color:#fff;
        :hover {
        color: #ee2562;
        }
      }
    }

    

    span {
        margin-bottom:20px;
      }

    

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
`
