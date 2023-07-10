import React from "react";
import styles from "./fotosbanner.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import Banner1 from "../../assets/img/Template01.jpg";
import Banner2 from "../../assets/img/Template02.jpg";
import Banner3 from "../../assets/img/Template03.jpg";

function FotosBanner() {
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
    <section className={styles.servicio} >
      <Container>
        <Row>
          <Col>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className={styles.servicioSlider}
              >
                <img className={styles.banner} src={Banner1} alt="01" />


                <img className={styles.banner} src={Banner3} alt="03" />
                <img className={styles.banner} src={Banner2} alt="02" />
              </Carousel>
           
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FotosBanner;
