import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Tabla from "../componentes/tablas/Tabla";

const StudUpdate = () => {
  let columnas1 = (
    <tr>
      <th>Nombre</th>
      <th>Caballeriza</th>
      <th>Puesto</th>
      <th>Fecha_Ingreso</th>
      <th>Stud</th>
    </tr>
  );

  let columnas2 = (
    <tr>
      <th>Nombre</th>
      <th>Caballeriza</th>
      <th>Victorias</th>
      <th>Fecha_Ingreso</th>
      <th>Stud</th>
    </tr>
  );

  let columnas3 = (
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>%</th>
      <th>Cedula</th>
      <th>Stud</th>
    </tr>
  );

  const ejemplares = [
    {
      id: "1",
      nombre: "Furia Negra",
      caballeriza: 1,
      puesto: 40,
      fecha_ingreso: "08/04/2018",
      stud: "Papa Pedro",
    },
    {
      id: "2",
      nombre: "Furia Negra",
      caballeriza: 1,
      puesto: 40,
      fecha_ingreso: "08/04/2018",
      stud: "Papa Pedro",
    },
    {
      id: "3",
      nombre: "Furia Negra",
      caballeriza: 1,
      puesto: 40,
      fecha_ingreso: "08/04/2018",
      stud: "Papa Pedro",
    },
    {
      id: "4",
      nombre: "Furia Negra",
      caballeriza: 1,
      puesto: 40,
      fecha_ingreso: "08/04/2018",
      stud: "Papa Pedro",
    },
    {
      id: "5",
      nombre: "Furia Negra",
      caballeriza: 1,
      puesto: 40,
      fecha_ingreso: "08/04/2018",
      stud: "Papa Pedro",
    },
    {
      id: "6",
      nombre: "Furia Negra",
      caballeriza: 1,
      puesto: 40,
      fecha_ingreso: "08/04/2018",
      stud: "Papa Pedro",
    },
  ];

  const entrenadores = [
    {
      id: "1",
      nombre: "Luka Modric",
      caballeriza: 1,
      victorias: 40,
      fecha_ingreso: "08/04/2018",
      stud: "Papa Pedro",
    },
    {
      id: "2",
      nombre: "Luka Modric",
      caballeriza: 1,
      victorias: 40,
      fecha_ingreso: "08/04/2018",
      stud: "Papa Pedro",
    },
    {
      id: "3",
      nombre: "Luka Modric",
      caballeriza: 1,
      victorias: 40,
      fecha_ingreso: "08/04/2018",
      stud: "Papa Pedro",
    },
    {
      id: "4",
      nombre: "Luka Modric",
      caballeriza: 1,
      victorias: 40,
      fecha_ingreso: "08/04/2018",
      stud: "Papa Pedro",
    },
    {
      id: "5",
      nombre: "Luka Modric",
      caballeriza: 1,
      victorias: 40,
      fecha_ingreso: "08/04/2018",
      stud: "Papa Pedro",
    },
    {
      id: "6",
      nombre: "Luka Modric",
      caballeriza: 1,
      victorias: 40,
      fecha_ingreso: "08/04/2018",
      stud: "Papa Pedro",
    },
  ];

  const propietarios = [
    {
      id: "1",
      nombre: "Luka",
      apellido: "Modric",
      porcentaje: 40,
      cedula: "28.308.694",
      stud: "Papa Pedro",
    },
    {
      id: "2",
      nombre: "Luka",
      apellido: "Modric",
      porcentaje: 40,
      cedula: "28.308.694",
      stud: "Papa Pedro",
    },
    {
      id: "3",
      nombre: "Luka",
      apellido: "Modric",
      porcentaje: 40,
      cedula: "28.308.694",
      stud: "Papa Pedro",
    },
    {
      id: "4",
      nombre: "Luka",
      apellido: "Modric",
      porcentaje: 40,
      cedula: "28.308.694",
      stud: "Papa Pedro",
    },
    {
      id: "5",
      nombre: "Luka",
      apellido: "Modric",
      porcentaje: 40,
      cedula: "28.308.694",
      stud: "Papa Pedro",
    },
    {
      id: "6",
      nombre: "Luka",
      apellido: "Modric",
      porcentaje: 40,
      cedula: "28.308.694",
      stud: "Papa Pedro",
    },
    {
      id: "6",
      nombre: "Luka",
      apellido: "Modric",
      porcentaje: 40,
      cedula: "28.308.694",
      stud: "Papa Pedro",
    },
    {
      id: "6",
      nombre: "Luka",
      apellido: "Modric",
      porcentaje: 40,
      cedula: "28.308.694",
      stud: "Papa Pedro",
    },
    {
      id: "6",
      nombre: "Luka",
      apellido: "Modric",
      porcentaje: 40,
      cedula: "28.308.694",
      stud: "Papa Pedro",
    },
    {
      id: "6",
      nombre: "Luka",
      apellido: "Modric",
      porcentaje: 40,
      cedula: "28.308.694",
      stud: "Papa Pedro",
    },
    {
      id: "6",
      nombre: "Luka",
      apellido: "Modric",
      porcentaje: 40,
      cedula: "28.308.694",
      stud: "Papa Pedro",
    },
    {
      id: "6",
      nombre: "Luka",
      apellido: "Modric",
      porcentaje: 40,
      cedula: "28.308.694",
      stud: "Papa Pedro",
    },
    {
      id: "6",
      nombre: "Luka",
      apellido: "Modric",
      porcentaje: 40,
      cedula: "28.308.694",
      stud: "Papa Pedro",
    },
    {
      id: "6",
      nombre: "Luka",
      apellido: "Modric",
      porcentaje: 40,
      cedula: "28.308.694",
      stud: "Papa Pedro",
    },
  ];

  return (
    <Container>
      <Col className="d-flex justify-content-center">
        <Row
          className="row row-cols-2 align-self-center rounded-start rounded-end"
          style={{ backgroundColor: "#68AEDB", width: "550px" }}
        >
          <Col className="text-center">
            <h1>PAPA PEDRO</h1>
          </Col>

          <Col className="d-flex justify-content-end">
            <Row className="row row-cols-2 flex-fill">
              <Col
                className="col-4 offset-4"
                style={{ backgroundColor: "#DEC618" }}
              ></Col>

              <Col
                className="col-4 rounded-end"
                style={{ backgroundColor: "#9900FF" }}
              ></Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Card className="mt-4 mx-5 px-2">
        <Card.Body>
          <Row>
            <Col className="col-auto">
              <Row>
                <h3>Fecha de cambio</h3>
              </Row>

              <Row className="ms-0">
                <input type="date"></input>
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Row>
              <Col className="ms-4">
                <h3>Buscar Ejemplar a cambiar</h3>
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
                          informacion={ejemplares}
                          funcion={(x) => (
                            <tr>
                              <td>{`${x.nombre}`}</td>
                              <td>{`${x.caballeriza}`}</td>
                              <td>{`${x.puesto}`}</td>
                              <td>{`${x.fecha_ingreso}`}</td>
                              <td>{`${x.stud}`}</td>
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
                            <option>Edad</option>
                            <option>Stud</option>
                            <option>Nro. Victorias</option>
                          </select>
                        </Row>

                        <Row className="mt-3">
                          <Col className="d-flex justify-content-center">
                            <Button className="col-5">BUSCAR</Button>
                          </Col>
                        </Row>

                        <Row className="mt-3 text-center">
                          <p className="fw-bold">
                            Los cambios de puesto o de caballeriza son decision
                            de los entrenadores o del Stud
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
              <Button className="mt-3">CAMBIAR EJEMPLAR DE STUD</Button>
            </Col>
          </Row>

          <Row className="d-flex">
            <Col className="d-flex justify-content-end">
              <Row className="row row-cols-1">
                <Col className="d-flex justify-content-end">
                  <Row
                    lassName="d-flex align-items-end"
                    style={{ height: "26px" }}
                  >
                    <p className="d-flex align-self-end">
                      No esta registrado el ejemplar?
                    </p>
                  </Row>
                </Col>

                <Col className="d-flex justify-content-end">
                  <Button size="sm">Agregar Nuevo Ejemplar</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mt-4 mx-5 px-2">
        <Card.Body>
          <Row>
            <Col className="col-auto">
              <Row>
                <h3>Fecha de cambio</h3>
              </Row>

              <Row className="ms-0">
                <input type="date"></input>
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Row>
              <Col className="ms-4">
                <h3>Buscar Entrenador a cambiar</h3>
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
                          informacion={entrenadores}
                          funcion={(x) => (
                            <tr>
                              <td>{`${x.nombre}`}</td>
                              <td>{`${x.caballeriza}`}</td>
                              <td>{`${x.victorias}`}</td>
                              <td>{`${x.fecha_ingreso}`}</td>
                              <td>{`${x.stud}`}</td>
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
                            <option>Nro. Victorias</option>
                          </select>
                        </Row>

                        <Row className="mt-3">
                          <Col className="d-flex justify-content-center">
                            <Button className="col-5">BUSCAR</Button>
                          </Col>
                        </Row>

                        <Row className="mt-3 text-center">
                          <p className="fw-bold">
                            Los cambios de puesto o de caballeriza son decision
                            de los entrenadores o del Stud
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
              <Button className="mt-3">CAMBIAR ENTRENADOR DE STUD</Button>
            </Col>
          </Row>

          <Row className="d-flex">
            <Col className="d-flex justify-content-end">
              <Row className="row row-cols-1">
                <Col className="d-flex justify-content-end">
                  <Row
                    lassName="d-flex align-items-end"
                    style={{ height: "26px" }}
                  >
                    <p className="d-flex align-self-end">
                      No esta registrado el entrenador?
                    </p>
                  </Row>
                </Col>

                <Col className="d-flex justify-content-end">
                  <Button size="sm">Agregar Nuevo Entrenador</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mt-4 mx-5 mb-4 px-2">
        <Card.Body>
          <Row>
            <Col className="col-auto">
              <Row>
                <h3>Fecha de cambio</h3>
              </Row>

              <Row className="ms-0">
                <input type="date"></input>
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Row>
              <Col className="ms-4">
                <h3>Buscar Propietario a cambiar</h3>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card className="ms-4">
                  <Card.Body>
                    <Row className="row-cols-2">
                      <Col className="col-8">
                        <Tabla
                          columnas={columnas3}
                          informacion={propietarios}
                          funcion={(x) => (
                            <tr>
                              <td>{`${x.nombre}`}</td>
                              <td>{`${x.apellido}`}</td>
                              <td>{`${x.porcentaje}`}</td>
                              <td>{`${x.cedula}`}</td>
                              <td>{`${x.stud}`}</td>
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
                            <option>Porcentaje</option>
                          </select>
                        </Row>

                        <Row className="mt-3">
                          <Col className="d-flex justify-content-center">
                            <Button className="col-5">BUSCAR</Button>
                          </Col>
                        </Row>

                        <Row className="mt-3 text-center">
                          <p className="fw-bold">
                            Los cambios de puesto o de caballeriza son decision
                            de los entrenadores o del Stud
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
              <Button className="mt-3">CAMBIAR PROPIETARIO DE STUD</Button>
            </Col>
          </Row>

          <Row className="d-flex">
            <Col className="d-flex justify-content-end">
              <Row className="row row-cols-1">
                <Col className="d-flex justify-content-end">
                  <Row
                    lassName="d-flex align-items-end"
                    style={{ height: "26px" }}
                  >
                    <p className="d-flex align-self-end">
                      No esta registrado el propietario?
                    </p>
                  </Row>
                </Col>

                <Col className="d-flex justify-content-end">
                  <Button size="sm">Agregar Nuevo Propietario</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StudUpdate;
