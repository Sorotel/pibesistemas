import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/img/logo1.png";
import logomail from "../../assets/img/envelope.svg";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3>
        La siguiente pagina fue creada como boceto y el contacto del mismo sera
        dirigido al programados Front-end que diseño la estructura.
      </h3>
      <Container>
        <Row>
          <Col sm={6}>
            <img className="imgLogo" src={logo} alt="logo footer" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="mailto:agusgimenez097@gmail.com">
                <img src={logomail} alt="logomail" />
              </a>
            </div>
            <p>CopyRight 2023. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
