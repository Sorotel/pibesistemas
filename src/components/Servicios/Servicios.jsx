import React from "react";
import styles from "./servicios.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";


function Servicios() {
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
    <section className={styles.servicio} id="servicios">
      <Container>
        <Row>
          <Col>
            <div className={styles.serviciobx}>
              <h2>Servicios</h2>
              <p>Brindamos los siguientes servicios:</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className={styles.servicioSlider}
              >
                <div>
                  <h2>Seguridad Informática</h2>
                  <p>
                    Protege tus sistemas contra amenazas cibernéticas.
                    Implementamos medidas de seguridad avanzadas para mantener
                    tus datos a salvo.
                  </p>
                </div>
                <div >
                  <h2>Optimización de Sistemas</h2>
                  <p>
                    Realizamos copias de seguridad periódicas y configuramos
                    sistemas de recuperación para evitar la pérdida de datos.
                  </p>
                </div>
                <div >
                  <h2>Respaldo y recuperación de datos</h2>
                  <p>
                    Realizamos copias de seguridad periódicas y configuramos
                    sistemas de recuperación para evitar la pérdida de datos.
                  </p>
                </div>
                <div >
                <h2>
            Administracion de Servidores 
          </h2>
          <p>Nos encargamos de administrar tus servidores para garantizar un rendimiento óptimo.</p>
                </div>
                <div>
                <h2>
            Desarrollo de Aplicaciones 
          </h2>
          <p>
            Desarrollamos aplicaciones personalizadas según tus necesidades empresariales.
          </p>
                </div>
                
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
}

export default Servicios;
