import React from "react"
import { Link } from "gatsby"
import { Wrapper, Credits, StyledH2 } from "./Footer.styles"

const Footer = () => (
  <>
    <Wrapper>
      <ul className="listing">
        <li className="menu">
          <StyledH2>Menu:</StyledH2>
          <p>
            <Link to="/">Inicio</Link>
          </p>
          <p>
            <Link to="/productos">Productos</Link>
          </p>
          <p>
            <Link to="/galeria/all-proyects/">Galería</Link>
          </p>
          <p>
            <Link to="/fichas_tecnicas/all-fichas/">Fichas</Link>
          </p>
          <p>
            <Link to="/blog/all-posts/">Blog</Link>
          </p>
          <p>
            <Link to="/contacto">Contacto</Link>
          </p>
        </li>
        <p>
          <StyledH2>Encuéntranos en:</StyledH2>
          <span>Dirección: </span>
          <p>
            Hipodromo No. 11 Col. San Miguel Xochimanga, C.P. 52927 - Atizapán
            de Zaragoza, EdoMéx.
          </p>
          <span>Teléfonos: </span>
          <p>55.5887.3716 // 55.5887.3717</p>
          <span>Email: </span>
          <p>ventas@multycasetas.com</p>
        </p>
        <li className="redes">
          <StyledH2>Siguenos en Redes:</StyledH2>
          <p>
            <a href="https://www.facebook.com/MultyCasetasLaminas">Facebook</a>
          </p>
          <p>
            <a href="https://instagram.com/multycasetas">Instagram</a>
          </p>
          <p>
            <a href="https://twitter.com/MultyCasetas">Twitter</a>
          </p>
          <p>
            <a href="https://www.youtube.com/user/CasetasPrefabricadas">
              Youtube
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/company/multycasetas">Linkedin</a>
          </p>
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
