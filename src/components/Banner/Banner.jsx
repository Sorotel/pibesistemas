import { Col, Container, Row } from "react-bootstrap";
import "aos/dist/aos.css";
import styles from "./banner.module.css";

function Banner() {

  
  


  return (
    <section className={styles.skill} id="home">
      <Container>
        <Row>
          <Col >
            <div className={styles.skillbx} data-aos="fade-right">
              <h1>
                SYSADMIN ON DEMAND
              </h1>
              <h6>
              <span >
              ¿Necesitas ayuda con el mantenimiento y administración de tus sistemas informáticos?
              </span>

                <span >¡Estamos aquí para ayudarte! </span>
              </h6>
              <h3>
              Bienvenido a nuestro servicio de sysadmin on demand.
              </h3>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
