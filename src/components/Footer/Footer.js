import React from "react"
import { Link } from "gatsby"
import { Wrapper, Credits, StyledH2 } from "./Footer.styles"

const Footer = () => (
  <>
    <Wrapper>
      <ul className="listing">
        <li className="menu">
          <StyledH2>Menu:</StyledH2>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/galeria/all-proyects/">Galería</Link>
          </li>
          <li>
            <Link to="/fichas_tecnicas/all-fichas/">Fichas</Link>
          </li>
          <li>
            <Link to="/blog/all-posts/">Blog</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </li>
        <li>
          <StyledH2>Encuéntranos en:</StyledH2>
          <span>Dirección: </span>
          <li>
            Hipodromo No. 11 Col. San Miguel Xochimanga, C.P. 52927 - Atizapán
            de Zaragoza, EdoMéx.
          </li>
          <span>Teléfonos: </span>
          <li>55.5887.3716 // 55.5887.3717</li>
          <span>Email: </span>
          <li>ventas@multycasetas.com</li>
        </li>
        <li className="redes">
          <StyledH2>Siguenos en Redes:</StyledH2>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="/">Youtube</a>
          </li>
        </li>
      </ul>
    </Wrapper>
    <Credits>
      Multycasetas - 2021 | Todos los derechos reservados. Sitio Creado por:
      Disturbio Ilustrativo
    </Credits>
  </>
)

export default Footer
