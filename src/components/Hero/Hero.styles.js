import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  max-height: 640px;
  margin-bottom: 60px;
  width: 100%;
  filter: brightness(85%);

  @media (min-width: 1920px) {
    max-height: 640px !important;
  } ;
`

export const FrontImg = styled(GatsbyImage)`
  max-height: 950px;
  margin-top: 20px;
`
export const FrontText = styled(GatsbyImage)`
  max-height: 600px;
  margin-bottom: 60px;
  @media (max-width: 450px) {
    margin-bottom: 65px;
  }
`

export const Wrapper = styled.div`
  position: relative;
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  transition: 1s all ease-in-out;

  @media (min-width: 1920px) {
    left: 100px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.fronText {
    @media (max-width: 450px) {
      margin-top: 15%;
    }
  }

  div.fronImage {
    @media (max-width: 450px) {
      position: relative;
      bottom: 20px;
    }
  }

  button {
    font-family: "Lato", Arial, Helvetica, sans-serif;
    font-size: 0.6rem;
    font-weight: 700;
    color: #000;
    position: relative;
    bottom: 90px;
    width: 100px;
    height: 35px;
    display: block;
    transition: 2s all ease-in-out;
    background: linear-gradient(
      90deg,
      rgb(242, 110, 59),
      rgba(242, 110, 59, 0.2)
    );
    border: none;
    border-radius: 3px;
    padding: 5px;
    margin-bottom: 30px;
    cursor: pointer;

    @media (min-width: 992px) {
      width: 120px;
      height: 50px;
      bottom: 150px;
      font-size: 1rem;
    }

    :hover {
      transition: 2s all ease-in-out;
      background: linear-gradient(
        90deg,
        rgba(242, 110, 59, 0.2),
        rgb(242, 110, 59)
      );
      color: #000;
    }
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    text-align: center;
    font-family: "Lato", Arial, Helvetica, sans-serif;
    letter-spacing: 5px;
    text-shadow: #000 2px 2px 2px;
    width: 66%;
    text-align: center;
    font-weight: bold;
    @media screen and (min-width: 768px) {
      line-height: 80px;
      font-size: 4rem;
    }
  }
`
