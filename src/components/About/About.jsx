import React from "react";
import styles from "./about.module.css";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className={styles.skill} id="about" responsive={responsive}>
      <Container>
        <Row>
          <Col>
            <div className={styles.skillbx}>
              <h2>Quiénes Somos</h2>
              <p>
                Somos un equipo de profesionales con más de 10 años de
                experiencia en servicios tecnológicos. Nos especializamos en
                brindar soluciones de sysadmin on demand a clientes de
                diferentes tamaños y sectores. Nuestro enfoque se basa en
                ofrecer un soporte técnico integral
                y personalizado para garantizar el óptimo funcionamiento de los
                sistemas informáticos de nuestros clientes.
              </p><p>
                Trabajamos con
                pasión y compromiso para proporcionar soluciones eficientes y
                adaptadas a las necesidades específicas de cada empresa. Nuestro
                objetivo es simplificar la administración y el mantenimiento de
                los sistemas informáticos, permitiendo que nuestros clientes se
                centren en su core business. Confía en nosotros para tener un
                sysadmin confiable y profesional a tu disposición.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
