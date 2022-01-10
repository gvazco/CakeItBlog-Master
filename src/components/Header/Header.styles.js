import styled from "styled-components"

export const Wrapper = styled.header`
  background-color: white;
  height: 130px;
  border-bottom: 1px solid #e7e7e7;
  position: fixed;
  width: 100%;
  z-index: 10000;

  .phone {
    text-align: center;
    font-family: "Lato";
    text-transform: uppercase;
    color: #212121;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 10px 0 0 0;
    background: #dddddd;

    a:hover {
      color: #ff6600;
      cursor: pointer;
    }

    @media (max-width: 368px) {
      display: none;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px 20px 20px;

  img {
    width: 120px;
    margin: 0;
    padding-bottom: 10px;
  }

  @media (max-width: 368px) {
    padding: 20px;
  }
`
