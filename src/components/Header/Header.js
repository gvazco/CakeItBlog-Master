import React from "react"
import { Link } from "gatsby"
import Navigation from "../Navigation/Navigation"
import Logo from "../../images/logo_multycasetas.png"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Wrapper, Content } from "./Header.styles"

const Header = () => {
  const { site, menu } = useMenuQuery()
  console.log(menu)

  return (
    <Wrapper>
      <div className="phone">
        <span>
          Teléfonos: <a href="tel:+52555873716">(55) 5887-3716</a> /{" "}
          <a href="tel:+52555873717">(55) 5887-3717</a> /
          <a href="tel:+528002867598"> (800) 286-7598</a>
        </span>
      </div>
      <Content>
        <Link to="/">
          <img src={Logo} alt={site.siteMetadata.title} />
        </Link>
        <Navigation menu={menu.menuItems.nodes} />
      </Content>
    </Wrapper>
  )
}

export default Header
