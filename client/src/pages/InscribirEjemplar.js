import React from "react";
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const InscribirEjemplar = () => {
  const location = useLocation();
  const {
    props: { id, cantidad },
  } = location.state;
  console.log(id);

  const ejemplares = [
    {
      id: "1",
      nombre: "Black Mamba",
    },
    {
      id: "2",
      nombre: "Black Mamba",
    },
    {
      id: "3",
      nombre: "Black Mamba",
    },
    {
      id: "4",
      nombre: "Black Mamba",
    },
    {
      id: "5",
      nombre: "Black Mamba",
    },
    {
      id: "6",
      nombre: "Black Mamba",
    },
    {
      id: "7",
      nombre: "Black Mamba",
    },
    {
      id: "8",
      nombre: "Black Mamba",
    },
    {
      id: "9",
      nombre: "Black Mamba",
    },
    {
      id: "10",
      nombre: "Black Mamba",
    },
    {
      id: "11",
      nombre: "Black Mamba",
    },
    {
      id: "12",
      nombre: "Black Mamba",
    },
  ];

  const medicamentos = [
    {
      id: "1",
      nombre: "Atamel",
    },
    {
      id: "2",
      nombre: "Omeprasol",
    },
    {
      id: "3",
      nombre: "Dencoru",
    },
    {
      id: "4",
      nombre: "Ranitidina",
    },
    {
      id: "5",
      nombre: "Riopan",
    },
  ];

  const implementos = [
    {
      id: "1",
      nombre: "Lentes",
    },
    {
      id: "2",
      nombre: "Fulete",
    },
    {
      id: "3",
      nombre: "Hoddie",
    },
    {
      id: "4",
      nombre: "Mascara",
    },
    {
      id: "5",
      nombre: "Rodillera",
    },
  ];

  const jinetes = [
    {
      id: "1",
      nombre: "Oscar Isaac",
    },
    {
      id: "2",
      nombre: "Marco Gimenez",
    },
    {
      id: "3",
      nombre: "Jerry Mina",
    },
  ];

  let content = [];
  for (let index = 0; index < cantidad; index++) {
    content.push(<option value={index + 1}>{index + 1}</option>);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log("entro");
    console.log(document.getElementById("numero").value);
    console.log(document.getElementById("ejemplar").value);
    console.log(document.getElementById("peso").value);
    console.log(document.getElementById("implemento").value);
    console.log(document.getElementById("medicamento").value);
    console.log(document.getElementById("jinete").value);
    console.log(document.getElementById("pesoJinete").value);
    console.log(document.getElementById("puesto").value);
  };

  return (
    <Container>
      <Form>
        <Row className="text-center">
          <h1>REGISTRAR EJEMPLAR EN CARRERA</h1>
        </Row>

        <Row className="mt-3">
          <Col className="justify-content-center align-items-center mx-5">
            <Card>
              <Card.Body>
                <Row className="row row-cols-4">
                  <Col>
                    <Row className="text-center">
                      <h4>Numero</h4>
                    </Row>

                    <Row className="d-flex justify-content-center">
                      <input
                        type="number"
                        min={1}
                        id="numero"
                        className="col-7"
                      ></input>
                    </Row>
                  </Col>

                  <Col>
                    <Row className="text-center">
                      <h4>Seleccionar Ejemplar</h4>
                    </Row>

                    <Row className="d-flex justify-content-center">
                      <select
                        id="ejemplar"
                        className="col-7"
                        style={{ height: "30px" }}
                      >
                        {ejemplares.map((x) => (
                          <option value={x.id}>{x.nombre}</option>
                        ))}
                      </select>
                    </Row>
                  </Col>

                  <Col>
                    <Row className="text-center">
                      <h4>Peso del Ejemplar</h4>
                    </Row>

                    <Row className="d-flex justify-content-center">
                      <input
                        type="number"
                        min={1}
                        id="peso"
                        className="col-7"
                      ></input>
                    </Row>
                  </Col>

                  <Col>
                    <Row className="text-center">
                      <h4>Implemento</h4>
                    </Row>

                    <Row className="d-flex justify-content-center">
                      <select
                        id="implemento"
                        className="col-7"
                        style={{ height: "30px" }}
                      >
                        {implementos.map((x) => (
                          <option value={x.id}>{x.nombre}</option>
                        ))}
                      </select>
                    </Row>
                  </Col>

                  <Col>
                    <Row className="text-center">
                      <h4>Medicamento</h4>
                    </Row>

                    <Row className="d-flex justify-content-center">
                      <select
                        id="medicamento"
                        className="col-7"
                        style={{ height: "30px" }}
                      >
                        {medicamentos.map((x) => (
                          <option value={x.id}>{x.nombre}</option>
                        ))}
                      </select>
                    </Row>
                  </Col>

                  <Col>
                    <Row className="text-center">
                      <h4>Seleccionar jinete</h4>
                    </Row>

                    <Row className="d-flex justify-content-center">
                      <select
                        id="jinete"
                        className="col-7"
                        style={{ height: "30px" }}
                      >
                        {jinetes.map((x) => (
                          <option value={x.id}>{x.nombre}</option>
                        ))}
                      </select>
                    </Row>
                  </Col>

                  <Col>
                    <Row className="text-center">
                      <h4>Peso del Jinete</h4>
                    </Row>

                    <Row className="d-flex justify-content-center">
                      <input
                        type="number"
                        min={1}
                        id="pesoJinete"
                        className="col-7"
                      ></input>
                    </Row>
                  </Col>

                  <Col>
                    <Row className="text-center">
                      <h4>Puesto en pista</h4>
                    </Row>

                    <Row className="d-flex justify-content-center">
                      <select
                        id="puesto"
                        className="col-7"
                        style={{ height: "30px" }}
                      >
                        {content}
                      </select>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3 d-flex justify-content-center">
          <Col className="col-auto d-flex justify-content-center">
            <Button onClick={formSubmissionHandler} size="xl">
              GUARDAR
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default InscribirEjemplar;
