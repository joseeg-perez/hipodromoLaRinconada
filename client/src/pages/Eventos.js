import React, { useState } from "react";
import { Container, Row, Card, Col, Button, Form } from "react-bootstrap";
import InfoEventos from "../componentes/eventos/InfoEventos";
import fotico from "../assets/registrarEvento.jpg";
import axios from "axios";

const Eventos = () => {
  let usuario1 = "crear";
  let usuario2 = "ver";
  let usuario3 = "inscribir";
  let usuario = usuario1;
  const [fechaEvento, setFechaEvento] = useState('')

  const handleFechaEvento = (event) => {
    setFechaEvento(event.target.value)
  }
  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/eventos/registrar_evento",
        {
          fechaEvento
        }
      );
    } catch (error) {
      throw error;
    }
    setFechaEvento('')
  }

  let cardAgregarCarrera = (
    <Card className="w-75 mb-2">
      <Card.Body>
        <Row className="row row-cols-2">
          <Col className="">
            <Row className="text-center">
              <h2>CREAR EVENTO</h2>
            </Row>

            <Row>
              <Form>
                <Row className="ms-3">
                  <h3>Fecha del evento</h3>
                </Row>

                <Row className="ms-4 mt-1">
                  <input type="date" className="col-5" onChange={handleFechaEvento}></input>
                </Row>
                <Row className="mt-2 d-flex justify-content-center">
                  <Button className="col-3" onClick={handleData}>Guardar</Button>
                </Row>
              </Form>
            </Row>
          </Col>

          <Col className="d-flex justify-content-center">
            <img src={fotico} width={350} height={200}></img>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
  const eventos = [
    {
      id: "1",
      fecha: "09/10/2022",
    },
    {
      id: "2",
      fecha: "09/10/2022",
    },
    {
      id: "3",
      fecha: "09/10/2022",
    },
    {
      id: "4",
      fecha: "09/10/2022",
    },
    {
      id: "5",
      fecha: "09/10/2022",
    },
    {
      id: "6",
      fecha: "09/10/2022",
    },
    {
      id: "7",
      fecha: "09/10/2022",
    },
    {
      id: "8",
      fecha: "09/10/2022",
    },
    {
      id: "9",
      fecha: "09/10/2022",
    },
  ];
  return (
    <Container>
      <Row className="text-center">
        <h1>EVENTOS</h1>
      </Row>

      <Row className="mt-3 mb-2">
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body style={{ height: "478px", overflowY: "scroll" }}>
              <Row className="text-center">
                <h3>PROXIMOS EVENTOS</h3>
              </Row>

              <Row className="d-flex justify-content-center row-cols-2 mt-2">
                <Col className="col-auto">
                  <h5>Buscar Evento</h5>
                </Col>
                <Col className="col-auto">
                  <input type="date"></input>
                </Col>

                <Col className="col-auto">
                  <Button
                    className="d-flex align-items-center"
                    style={{ height: "28px" }}
                  >
                    Buscar
                  </Button>
                </Col>
              </Row>

              <Row className="row row-cols-3 mt-3 text-center d-flex justify-content-center">
                {eventos.map((x) => (
                  <InfoEventos
                    key={x.id}
                    id={x.id}
                    fecha={x.fecha}
                    tipo={
                      usuario == "crear"
                        ? "eventoRegistrar"
                        : "carrerasRegistradas"
                    }
                    tipo2={usuario == "inscribir" ? "inscribirEjemplar" : "ver"}
                  ></InfoEventos>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col className="justify-content-center align-items-center mx-5">
          {usuario == "crear" ? cardAgregarCarrera : <p></p>}
        </Col>
      </Row>
    </Container>
  );
};

export default Eventos;
