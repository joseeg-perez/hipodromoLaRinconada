import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Tabla from "../componentes/tablas/Tabla";
const CaballerizaRegistrar = (props) => {
  let columnas1 = (
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Victorias</th>
    </tr>
  );

  let columnas2 = (
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>cedula</th>
    </tr>
  );

  const entrenadores = [
    {
      id: "1",
      nombre: "Gabriel",
      apellido: "Mora",
      victorias: 45,
    },
    {
      id: "2",
      nombre: "Gabriel",
      apellido: "Mora",
      victorias: 45,
    },
    {
      id: "3",
      nombre: "Gabriel",
      apellido: "Mora",
      victorias: 45,
    },
    {
      id: "4",
      nombre: "Gabriel",
      apellido: "Mora",
      victorias: 45,
    },
    {
      id: "5",
      nombre: "Gabriel",
      apellido: "Mora",
      victorias: 45,
    },
    {
      id: "6",
      nombre: "Gabriel",
      apellido: "Mora",
      victorias: 45,
    },
  ];

  const veterinarios = [
    {
      id: "1",
      nombre: "Eladio",
      apellido: "Carrion",
      cedula: "28.308.365",
    },
    {
      id: "2",
      nombre: "Eladio",
      apellido: "Carrion",
      cedula: "28.308.365",
    },
    {
      id: "3",
      nombre: "Eladio",
      apellido: "Carrion",
      cedula: "28.308.365",
    },
    {
      id: "4",
      nombre: "Eladio",
      apellido: "Carrion",
      cedula: "28.308.365",
    },
    {
      id: "5",
      nombre: "Eladio",
      apellido: "Carrion",
      cedula: "28.308.365",
    },
    {
      id: "6",
      nombre: "Eladio",
      apellido: "Carrion",
      cedula: "28.308.365",
    },
  ];

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col
          className="col-auto rounded-end rounded-start"
          style={{ backgroundColor: "#6376D4" }}
        >
          <h1>REGISTRAR CABALLERIZA</h1>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body>
              <Row className="">
                <Col className="col-auto ms-4">
                  <Row>
                    <h3>Fecha de cambio</h3>
                  </Row>

                  <Row className="ms-0">
                    <input type="date" style={{ height: "30px" }}></input>
                  </Row>
                </Col>

                <Col className="col-auto ms-5">
                  <Row>
                    <h3>Numero de Puestos</h3>
                  </Row>

                  <Row className="ms-0">
                    <input type="number" className="col-6"></input>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-2">
                <Row>
                  <Col className="ms-4">
                    <h3>Buscar Entrenador</h3>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Card className="ms-4">
                      <Card.Body>
                        <Row className="row-cols-2">
                          <Col className="col-8">
                            <Tabla
                              columnas={columnas1}
                              informacion={entrenadores}
                              funcion={(x) => (
                                <tr>
                                  <td>{`${x.nombre}`}</td>
                                  <td>{`${x.apellido}`}</td>
                                  <td>{`${x.victorias}`}</td>
                                </tr>
                              )}
                            ></Tabla>
                          </Col>

                          <Col className="col-3 ms-5">
                            <Row>
                              <h4>Filtrar por:</h4>
                            </Row>
                            <Row className="row-cols-2">
                              <Col className="col-auto">
                                <h5>Nombre</h5>
                              </Col>

                              <Col>
                                <input
                                  placeholder="Buscar"
                                  style={{ width: "160px" }}
                                ></input>
                              </Col>
                            </Row>

                            <Row className="mt-3 ms-0">
                              <select style={{ height: "30px" }}>
                                <option>Stud</option>
                                <option>Nro.Victorias</option>
                              </select>
                            </Row>

                            <Row className="mt-3">
                              <Col className="d-flex justify-content-center">
                                <Button className="col-5">BUSCAR</Button>
                              </Col>
                            </Row>

                            <Row className="mt-3 text-center">
                              <p className="fw-bold">
                                Los cambios de puesto o de caballeriza son
                                decision de los entrenadores o del Stud
                              </p>
                            </Row>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Row>

              <Row className="mt-2">
                <Row>
                  <Col className="ms-4">
                    <h3>Buscar Veterinario</h3>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Card className="ms-4">
                      <Card.Body>
                        <Row className="row-cols-2">
                          <Col className="col-8">
                            <Tabla
                              columnas={columnas2}
                              informacion={veterinarios}
                              funcion={(x) => (
                                <tr>
                                  <td>{`${x.nombre}`}</td>
                                  <td>{`${x.apellido}`}</td>
                                  <td>{`${x.cedula}`}</td>
                                </tr>
                              )}
                            ></Tabla>
                          </Col>

                          <Col className="col-3 ms-5">
                            <Row>
                              <h4>Filtrar por:</h4>
                            </Row>
                            <Row className="row-cols-2">
                              <Col className="col-auto">
                                <h5>Nombre</h5>
                              </Col>

                              <Col>
                                <input
                                  placeholder="Buscar"
                                  style={{ width: "160px" }}
                                ></input>
                              </Col>
                            </Row>

                            <Row className="mt-3 ms-0">
                              <select style={{ height: "30px" }}>
                                <option>Stud</option>
                                <option>Nro.Victorias</option>
                              </select>
                            </Row>

                            <Row className="mt-3">
                              <Col className="d-flex justify-content-center">
                                <Button className="col-5">BUSCAR</Button>
                              </Col>
                            </Row>

                            <Row className="mt-3 text-center">
                              <p className="fw-bold">
                                Los cambios de puesto o de caballeriza son
                                decision de los entrenadores o del Stud
                              </p>
                            </Row>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Row>

              <Row>
                <Col className="d-flex justify-content-center">
                  <Button className="mt-3">REGISTRAR CABALLERIZA</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CaballerizaRegistrar;
