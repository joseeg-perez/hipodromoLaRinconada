import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";
import Tabla from "../Tabla";

export const ConsultaJinete = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mx-5 mt-5">
            <Card.Header>
              <h2>
                {props.nombre1} {props.apellido1}
              </h2>
            </Card.Header>
            <Card.Body>
              <Row className="align-items-center">
                <Col className="col-3"></Col>
                <Col>
                  <Row>
                    <Col>
                      <ul className="list-unstyled mb-1-9">
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 fw-bold me-2 font-weight-600">
                            Rango:
                          </span>{" "}
                          <span>{props.rango}</span>
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 fw-bold me-2 font-weight-600">
                            Ultimo ejemplar montando:
                          </span>{" "}
                          {props.ejemplar}
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 fw-bold me-2 font-weight-600">
                            Fecha de nacimiento:
                          </span>{" "}
                          {props.fecha_nac}
                        </li>
                      </ul>
                    </Col>
                    <Col className="align-content-end mt-5">
                      <div className="d-flex pt-1 justify-content-end mt-4">
                        <Button className="btn btn-light btn-outline-success btn-sm mx-1">
                          <img src={edit} alt="/" width={20} />
                        </Button>

                        <Button className="btn btn-light btn-outline-danger btn-sm mx-1">
                          <img src={trash} alt="/" width={20} />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <div className="mt-5">
            <h2 className="ms-5">Tablas</h2>
            <Card className="mb-3 mx-5">
              <Card.Body>
                <h3 className="mt-2 text-center">Mejores resultados</h3>
                <div className="text-center">
                  <Tabla
                    columnas={props.columnas}
                    informacion={props.info}
                    funcion={(x) => (
                      <tr>
                        <td>{`${x.posicion}`}</td>
                        <td>{`${x.victorias}`}</td>
                        <td>{`${x.ganancia}`}</td>
                      </tr>
                    )}
                  ></Tabla>
                </div>
                <h3 className="mt-4 text-center">Caballerizas</h3>
                <div className="text-center">
                  <Tabla
                    columnas={props.columnas}
                    informacion={props.info}
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
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
