import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import CardEjemplarResultado from "../componentes/eventos/CardEjemplarResultado";

const ResultadoAgregar = (props) => {
  const location = useLocation();
  const {
    props: { id, fecha, distancia, cantidad },
  } = location.state;

  console.log(cantidad);
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
    /*{
      id: "13",
      nombre: "Black Mamba",
    },
    {
      id: "14",
      nombre: "Black Mamba",
    },
    {
      id: "15",
      nombre: "Black Mamba",
    },
    {
      id: "16",
      nombre: "Black Mamba",
    },*/
  ];

  let content = [];
  for (let index = 0; index < ejemplares.length; index++) {
    content = [...content, <option value={index + 1}>{index + 1}</option>];
  }

  let content2 = [];
  for (let index = 0; index < ejemplares.length; index++) {
    content2.push(<li className="list-group-item">{index + 1}</li>);
  }

  let content3 = [];
  for (let index = 0; index < ejemplares.length; index++) {
    content3.push(
      <li className="list-group-item" style={{ height: "41px" }}>
        <Row className="row row-cols-2">
          <Col className="d-flex justify-content-center">
            <input id={`dt${index + 1}`} style={{ width: "80px" }} placeholder="D.tiempo"></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input id={`dc${index + 1}`} style={{ width: "80px" }} placeholder="D.cuerpo"></input>
          </Col>
        </Row>
      </li>
    );
  }

  let content4 = [];
  for (let index = 0; index < ejemplares.length; index++) {
    content4.push(
      <li className="list-group-item" style={{ height: "41px" }}>
        <Row className="row row-cols-4">
          <Col className="d-flex justify-content-center">
            <input id={`sr300${index + 1}`} style={{ width: "65px" }} placeholder="300m"></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input id={`sr400${index + 1}`} style={{ width: "65px" }} placeholder="400m"></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input id={`sr800${index + 1}`} style={{ width: "65px" }} placeholder="800m"></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input id={`src${index + 1}`} style={{ width: "65px" }} placeholder="Carrera"></input>
          </Col>
        </Row>
      </li>
    );
  }

  let content5 = [];
  for (let index = 0; index < ejemplares.length; index++) {
    content5.push(
      <li className="list-group-item" style={{ height: "41px" }}>
        <Row className="row row-cols-4">
          <Col className="d-flex justify-content-center">
            <input id={`tp300${index + 1}`} style={{ width: "65px" }} placeholder="300m"></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input id={`tp400${index + 1}`} style={{ width: "65px" }} placeholder="400m"></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input id={`tp800${index + 1}`} style={{ width: "65px" }} placeholder="800m"></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input id={`tpc${index + 1}`} style={{ width: "65px" }} placeholder="Carrera"></input>
          </Col>
        </Row>
      </li>
    );
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log("entro");
    console.log(document.getElementById(12).value);
    console.log(document.getElementById("dt1").value);
    console.log(document.getElementById("dc1").value);
  };
  return (
    <Container>
      <Form id="form">
        <Row className="text-center">
          <h1>AGREGAR RESULTADO</h1>
        </Row>

        <Row>
          <Col className="justify-content-center align-items-center mx-5">
            <Card>
              <Card.Body>
                <Row className="text-center">
                  <h3>EJEMPLARES PARTICIPANTES</h3>
                </Row>

                <Row className="row row-cols-4">
                  {ejemplares.map((x) => (
                    <Col className="mb-3">
                      <Row className="row row-cols-2 d-flex">
                        <Col className="col-10">
                          <CardEjemplarResultado
                            key={x.id}
                            id={x.id}
                            nombre={x.nombre}
                          ></CardEjemplarResultado>
                        </Col>
                        <Col className="col-2 d-flex justify-content-end">
                          <select id={x.id}>{content}</select>
                        </Col>
                      </Row>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="justify-content-center align-items-center mx-5">
            <Card>
              <Card.Body>
                <Row className="text-center">
                  <h3>CLASIFICACION</h3>
                </Row>

                <Row>
                  <div className="card-group">
                    <Col style={{ width: "72px" }} className="col-1">
                      <div className="card">
                        <div className="card-body">
                          <Row className="text-center">
                            <h6>Pos</h6>
                          </Row>

                          <Row
                            className="text-center"
                            style={{ marginTop: "40px" }}
                          >
                            <ul className="list-group list-group-flush">
                              {content2}
                            </ul>
                          </Row>
                        </div>
                      </div>
                    </Col>

                    <Col style={{ width: "304px" }} className="col-1">
                      <div className="card">
                        <div className="card-body">
                          <Row className="text-center">
                            <h6>Diferencias</h6>
                          </Row>

                          <Row className="row row-cols-2">
                            <Col>
                              <Row className="text-center">
                                <p>Tiempo</p>
                              </Row>
                            </Col>

                            <Col>
                              <Row className="text-center">
                                <p>Cuerpos</p>
                              </Row>
                            </Col>
                          </Row>

                          <Row>
                            <ul
                              className="list-group list-group-flush"
                              style={{ marginLeft: "6px" }}
                            >
                              {content3}
                            </ul>
                          </Row>
                        </div>
                      </div>
                    </Col>

                    <Col style={{ width: "395px" }} className="col-1">
                      <div className="card">
                        <div className="card-body">
                          <Row className="text-center">
                            <h6>Speed Ratings</h6>
                          </Row>

                          <Row className="row row-cols-4">
                            <Col>
                              <Row className="text-center">
                                <p>300m</p>
                              </Row>
                            </Col>

                            <Col>
                              <Row className="text-center">
                                <p>400m</p>
                              </Row>
                            </Col>

                            <Col>
                              <Row className="text-center">
                                <p>800m</p>
                              </Row>
                            </Col>

                            <Col>
                              <Row className="text-center">
                                <p>Carrera</p>
                              </Row>
                            </Col>
                          </Row>

                          <Row>
                            <ul
                              class="list-group list-group-flush"
                              style={{ marginLeft: "6px" }}
                            >
                              {content4}
                            </ul>
                          </Row>
                        </div>
                      </div>
                    </Col>

                    <Col style={{ width: "395px" }} className="col-1">
                      <div className="card">
                        <div className="card-body">
                          <Row className="text-center">
                            <h6>Parciales</h6>
                          </Row>

                          <Row className="row row-cols-4">
                            <Col>
                              <Row className="text-center">
                                <p>300m</p>
                              </Row>
                            </Col>

                            <Col>
                              <Row className="text-center">
                                <p>400m</p>
                              </Row>
                            </Col>

                            <Col>
                              <Row className="text-center">
                                <p>800m</p>
                              </Row>
                            </Col>

                            <Col>
                              <Row className="text-center">
                                <p>Carrera</p>
                              </Row>
                            </Col>
                          </Row>

                          <Row>
                            <ul
                              class="list-group list-group-flush"
                              style={{ marginLeft: "6px" }}
                            >
                              {content5}
                            </ul>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3 ms-5">
          <Col>
           <Row>
            <h4>Observaciones</h4>
           </Row>
           <Row>
            <textarea className="col-3" style={{height: "100px"}} id="txta"></textarea>
           </Row>
          </Col>
        </Row>

        <Row className="mt-3 d-flex justify-content-center">
          <Col className="col-auto d-flex justify-content-center">
            <Button onClick={formSubmissionHandler} size="xl">GUARDAR</Button>
          </Col>
          
        </Row>
      </Form>
    </Container>
  );
};

export default ResultadoAgregar;
