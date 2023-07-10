import React, { useEffect } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./projects.module.css";
import { ArrowRightCircle } from "react-bootstrap-icons";

function Pricing() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.skill} id="pricing">
      <Container>
        <Row>
          <Col>
            <div className={styles.skillbx} data-aos="flip-left">
              <h2>Formas de Contraración</h2>
              
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <h4>Bolsa de Horas</h4>
                        <span>
                          Contrata un número determinado de horas de servicio y
                          utilízalas según tus necesidades.
                        </span>
                        <div className={styles.projtxtx}>
                          <span>Para mas información contactemos.</span>
                          <div>
                            <a href="#connect">
                              <button className={styles.buttonCard}>
                                Contacto <ArrowRightCircle size={25} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <h3>Proyecto específico</h3>
                        <span>
                          Si tienes un proyecto en mente, podemos brindarte
                          apoyo técnico durante su desarrollo.
                        </span>
                        <div className={styles.projtxtx}>
                          <span>Para mas información contactemos.</span>
                          <div>
                            <a href="#connect">
                              <button className={styles.buttonCard}>
                                Contacto <ArrowRightCircle size={25} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <h4>Pago mensual</h4>
                        <span>
                        Obtén un servicio de sysadmin on demand de manera continua pagando una tarifa mensual fija.
                        </span>
                        <div className={styles.projtxtx}>
                          <span>Para mas información contactemos.</span>
                          <div>
                            <a href="#connect">
                              <button className={styles.buttonCard}>
                                Contacto <ArrowRightCircle size={25} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Pricing;
