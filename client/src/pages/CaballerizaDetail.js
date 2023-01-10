import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Tabla from "../componentes/tablas/Tabla";

const CaballerizaDetail = () => {
  const location = useLocation();
  const {
    props: { entrenador, veterinario, numero, total, disponible },
  } = location.state;

  let columnas1 = (
    <tr>
      <th>Nombre</th>
      <th>Puesto</th>
      <th>Fecha_Ingreso</th>
      <th>Stud</th>
    </tr>
  );

  let columnas2 = (
    <tr>
      <th>Nombre</th>
      <th>Caballeriza</th>
      <th>Puesto</th>
      <th>Fecha_Ingreso</th>
      <th>Stud</th>
    </tr>
  );

  let columnas3 = (
    <tr>
      <th>Nombre</th>
      <th>Caballeriza</th>
      <th>Victorias</th>
      <th>Fecha_Ingreso</th>
      <th>Stud</th>
    </tr>
  );

  let columnas4 = (
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Caballeriza</th>
      <th>Cedula</th>
      <th>Stud</th>
    </tr>
  );

  const ejemplares = [
    {
      id: "1",
      nombre: "Black Mamba",
      stud: "PAPA PEDRO",
      puesto: 45,
      fecha_ingreso: "27/12/2022",
    },
    {
      id: "2",
      nombre: "Black Mamba",
      stud: "PAPA PEDRO",
      puesto: 45,
      fecha_ingreso: "27/12/2022",
    },
    {
      id: "3",
      nombre: "Black Mamba",
      stud: "PAPA PEDRO",
      puesto: 45,
      fecha_ingreso: "27/12/2022",
    },
    {
      id: "4",
      nombre: "Black Mamba",
      stud: "PAPA PEDRO",
      puesto: 45,
      fecha_ingreso: "27/12/2022",
    },
    {
      id: "5",
      nombre: "Black Mamba",
      stud: "PAPA PEDRO",
      puesto: 45,
      fecha_ingreso: "27/12/2022",
    },
    {
      id: "6",
      nombre: "Black Mamba",
      stud: "PAPA PEDRO",
      puesto: 45,
      fecha_ingreso: "27/12/2022",
    },
  ];

  const ejemplares2 = [
    {
      id: "1",
      nombre: "Black Mamba",
      caballeriza: 23,
      stud: "PAPA PEDRO",
      puesto: 45,
      fecha_ingreso: "27/12/2022",
    },
    {
      id: "2",
      nombre: "Black Mamba",
      caballeriza: 23,
      stud: "PAPA PEDRO",
      puesto: 45,
      fecha_ingreso: "27/12/2022",
    },
    {
      id: "3",
      nombre: "Black Mamba",
      caballeriza: 23,
      stud: "PAPA PEDRO",
      puesto: 45,
      fecha_ingreso: "27/12/2022",
    },
    {
      id: "4",
      nombre: "Black Mamba",
      caballeriza: 23,
      stud: "PAPA PEDRO",
      puesto: 45,
      fecha_ingreso: "27/12/2022",
    },
    {
      id: "5",
      nombre: "Black Mamba",
      caballeriza: 23,
      stud: "PAPA PEDRO",
      puesto: 45,
      fecha_ingreso: "27/12/2022",
    },
    {
      id: "6",
      nombre: "Black Mamba",
      caballeriza: 23,
      stud: "PAPA PEDRO",
      puesto: 45,
      fecha_ingreso: "27/12/2022",
    },
  ];

  const entrenadores = [
    {
      id: "1",
      nombre: "Gabriel Mora",
      caballeriza: 23,
      victorias: 45,
      fecha_ingreso: "27/12/2022",
      stud: "PAPA PEDRO",
    },
    {
      id: "2",
      nombre: "Gabriel Mora",
      caballeriza: 23,
      victorias: 45,
      fecha_ingreso: "27/12/2022",
      stud: "PAPA PEDRO",
    },
    {
      id: "3",
      nombre: "Gabriel Mora",
      caballeriza: 23,
      victorias: 45,
      fecha_ingreso: "27/12/2022",
      stud: "PAPA PEDRO",
    },
    {
      id: "4",
      nombre: "Gabriel Mora",
      caballeriza: 23,
      victorias: 45,
      fecha_ingreso: "27/12/2022",
      stud: "PAPA PEDRO",
    },
    {
      id: "5",
      nombre: "Gabriel Mora",
      caballeriza: 23,
      victorias: 45,
      fecha_ingreso: "27/12/2022",
      stud: "PAPA PEDRO",
    },
    {
      id: "6",
      nombre: "Gabriel Mora",
      caballeriza: 23,
      victorias: 45,
      fecha_ingreso: "27/12/2022",
      stud: "PAPA PEDRO",
    },
  ];

  const veterinarios = [
    {
      id: "1",
      nombre: "Eladio",
      apellido: "Carrion",
      caballeriza: 23,
      cedula: "28.308.632",
      stud: "PAPA PEDRO",
    },
    {
      id: "2",
      nombre: "Eladio",
      apellido: "Carrion",
      caballeriza: 23,
      cedula: "28.308.632",
      stud: "PAPA PEDRO",
    },
    {
      id: "3",
      nombre: "Eladio",
      apellido: "Carrion",
      caballeriza: 23,
      cedula: "28.308.632",
      stud: "PAPA PEDRO",
    },
    {
      id: "4",
      nombre: "Eladio",
      apellido: "Carrion",
      caballeriza: 23,
      cedula: "28.308.632",
      stud: "PAPA PEDRO",
    },
    {
      id: "5",
      nombre: "Eladio",
      apellido: "Carrion",
      caballeriza: 23,
      cedula: "28.308.632",
      stud: "PAPA PEDRO",
    },
    {
      id: "6",
      nombre: "Eladio",
      apellido: "Carrion",
      caballeriza: 23,
      cedula: "28.308.632",
      stud: "PAPA PEDRO",
    },
  ];

  return (
    <Container>
      <Row>
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body>
              <Row className="d-flex justify-content-center">
                <Col
                  className="col col-auto rounded-start rounded-end"
                  style={{ backgroundColor: "#6376D4" }}
                >
                  <h1>{`Caballeriza Nro. ${numero}`}</h1>
                </Col>
              </Row>

              <Row className="row row-cols-2 mt-3">
                <Col className="col-6 ms-2">
                  <Tabla
                    titulo="EJEMPLARES DE LA CABALLERIZA"
                    columnas={columnas1}
                    informacion={ejemplares}
                    funcion={(x) => (
                      <tr>
                        <td>{`${x.nombre}`}</td>
                        <td>{`${x.puesto}`}</td>
                        <td>{`${x.fecha_ingreso}`}</td>
                        <td>{`${x.stud}`}</td>
                      </tr>
                    )}
                  ></Tabla>
                </Col>

                <Col className="col-5" style={{ width: "495px" }}>
                  <Row
                    className=" row-cols-2 d-flex justify-content-center mt-5"
                    style={{ height: "35px" }}
                  >
                    <Col
                      style={{ backgroundColor: "#6376D4" }}
                      className="rounded-start rounded-end col-4 text-center d-flex align-items-center"
                    >
                      <h6>{`Entrenador: ${entrenador}`}</h6>
                    </Col>

                    <Col
                      style={{ backgroundColor: "#6376D4" }}
                      className="rounded-start rounded-end col-4 ms-3 text-center d-flex align-items-center"
                    >
                      <h6>{`Veterinario: ${veterinario}`}</h6>
                    </Col>
                  </Row>

                  <Row
                    className="row row-cols-2 d-flex justify-content-center mt-5"
                    style={{ height: "35px" }}
                  >
                    <Col
                      style={{ backgroundColor: "#6376D4" }}
                      className="rounded-start rounded-end col-auto d-flex align-items-center"
                    >
                      <h6>{`Total Puestos: ${total}`}</h6>
                    </Col>

                    <Col
                      style={{ backgroundColor: "#6376D4" }}
                      className="rounded-start rounded-end col-auto ms-3 d-flex align-items-center"
                    >
                      <h6>{`Disponibles: ${disponible}`}</h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body>
              <Row className="d-flex justify-content-between">
                <Col className="col-auto ms-4">
                  <Row>
                    <h3>Nro. caballeriza</h3>
                  </Row>

                  <Row className="ms-0">
                    <input type="number"></input>
                  </Row>
                </Col>

                <Col className="col-auto">
                  <Row>
                    <h3>Puesto</h3>
                  </Row>

                  <Row className="ms-0">
                    <input type="number"></input>
                  </Row>
                </Col>

                <Col className="col-auto me-5">
                  <Row>
                    <h3>Fecha de cambio</h3>
                  </Row>

                  <Row className="ms-0">
                    <input type="date"  style={{height: "30px"}}></input>
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
                              columnas={columnas2}
                              informacion={ejemplares2}
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
                                <option>Stud</option>
                                <option>Edad</option>
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
                  <Button className="mt-3">CAMBIAR EJEMPLAR DE PUESTO</Button>
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
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body>
              <Row className="">
                <Col className="col-auto ms-4">
                  <Row>
                    <h3>Nro. caballeriza</h3>
                  </Row>

                  <Row className="ms-0">
                    <input type="number"></input>
                  </Row>
                </Col>

                <Col className="col-auto ms-5">
                  <Row>
                    <h3>Fecha de cambio</h3>
                  </Row>

                  <Row className="ms-0">
                    <input type="date"  style={{height: "30px"}}></input>
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
                              columnas={columnas3}
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
                  <Button className="mt-3">CAMBIAR ENTRENADOR DE CABALLERIZA</Button>
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
        </Col>
      </Row>
    
      <Row className="mt-5 mb-5">
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body>
              <Row className="">
                <Col className="col-auto ms-4">
                  <Row>
                    <h3>Nro. caballeriza</h3>
                  </Row>

                  <Row className="ms-0">
                    <input type="number"></input>
                  </Row>
                </Col>

                <Col className="col-auto ms-5">
                  <Row>
                    <h3>Fecha de cambio</h3>
                  </Row>

                  <Row className="ms-0">
                    <input type="date"  style={{height: "30px"}}></input>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-2">
                <Row>
                  <Col className="ms-4">
                    <h3>Buscar Veterinario a cambiar</h3>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Card className="ms-4">
                      <Card.Body>
                        <Row className="row-cols-2">
                          <Col className="col-8">
                            <Tabla
                              columnas={columnas4}
                              informacion={veterinarios}
                              funcion={(x) => (
                                <tr>
                                  <td>{`${x.nombre}`}</td>
                                  <td>{`${x.apellido}`}</td>
                                  <td>{`${x.caballeriza}`}</td>
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
                  <Button className="mt-3">CAMBIAR VETERINARIO DE CABALLERIZA</Button>
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
                          No esta registrado el veterinario?
                        </p>
                      </Row>
                    </Col>

                    <Col className="d-flex justify-content-end">
                      <Button size="sm">Agregar Nuevo Veterinario</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
};

export default CaballerizaDetail;
