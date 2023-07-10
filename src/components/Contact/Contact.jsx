import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "./contact.css";
import styles from "./contact.module.css";

function Contact() {
  const formInitialDetails = {
    firstNameLastName: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  function handleFormUpdate(category, value) {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  }

  async function handleSubmit(e) {
    e.prevent.default();
    setButtonText("Enviando...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Enviar");
    let result = response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Mensaje enviado exitosamente" });
    } else {
      setStatus({
        succes: false,
        message: "Algo salio mal, porfavor intente de nuevo.",
      });
    }
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="contact" id="connect">
      <Container>
        <Col md={6}></Col>
        <Col>
          <div className={styles.skillbx} data-aos="zoom-in">
            <h2>Contáctame</h2>
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/agusgimenez097@gmail.com"
              method="POST"
            >
              <Row>
                <div className="containerInput">
                  <Col  className="px-1" id="inputEm">
                    <input
                      name="Nombre"
                      type="text"
                      value={formDetails.firstName}
                      placeholder="Nombre y Apellido"
                      onChange={(e) =>
                        handleFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                </div>
                <Col sm={6} className="px-1" id="inputEm">
                  <input
                    name="Email"
                    type="text"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => handleFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    name="Mensaje"
                    row="6"
                    value={formDetails.message}
                    placeholder="Mensaje"
                    onChange={(e) =>
                      handleFormUpdate("message", e.target.value)
                    }
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </div>
        </Col>
      </Container>
    </section>
  );
}

export default Contact;
