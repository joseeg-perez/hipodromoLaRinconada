import React from "react";
import { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import lapiz from "../../assets/editicon.png";

const InfoCarrera = (props) => {
  return (
    <Fragment>
      <Col>
        <Row className="row row-cols-2">
          <Col className="col-2 d-flex align-items-end">
            <h1>{props.num}</h1>
          </Col>

          <Col className="col-10 d-flex justify-content-start">
            <Card className="w-100 mb-3">
              <Card.Body>
                <Row>
                  <h5>{`NOMBRE: ${props.nombre}`}</h5>
                </Row>
                <Row>
                    <h5>{`CATEGORIA: ${props.cat}`}</h5>
                </Row>
                <Row>
                  <h5>{`PREMIO 1: ${props.p1}`}</h5>
                </Row>
                <Row>
                  <h5>{`PREMIO 2: ${props.p2}`}</h5>
                </Row>
                <Row>
                  <h5>{`PREMIO 3: ${props.p3}`}</h5>
                </Row>
                <Row>
                  <h5>{`PREMIO 4: ${props.p4}`}</h5>
                </Row>
                <Row>
                  <h5>{`PREMIO 5: ${props.p5}`}</h5>
                </Row>
                <Row className="row row-cols-2">
                  <Col className="col-8">
                  <h5>{`HORA: ${props.hora}`}</h5>
                  </Col>

                  <Col className="col-4">
                    {props.tipo == "resultado" ? (
                      <NavLink
                        className="btn btn-primary"
                        to={{
                          pathname: "/resultado/agregar",
                          state: { props },
                        }}
                      >
                        Agregar
                      </NavLink>
                    ) : props.tipo == "inscribir" ? (
                      <NavLink
                        className="btn btn-primary"
                        to={{
                          pathname: `/inscribir/ejemplar/${props.id}`,
                          state: { props },
                        }}
                      >
                        Inscribir
                      </NavLink>
                    ) : props.tipo == "editar" ? (
                      <NavLink
                        className="ms-5"
                        to={{
                          pathname: `/carrera/${props.id}/update`,
                          state: { props },
                        }}
                      >
                        <img src={lapiz} width={40} height={40}></img>
                      </NavLink>
                    ) : props.tipo == "retirar" ? (
                      <NavLink
                        className="btn btn-primary"
                        to={{
                          pathname: `/retiros/carrera/${props.id}`,
                          state: { props },
                        }}
                      >
                        Retirar
                      </NavLink>
                    ) : (
                      <p></p>
                    )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Fragment>
  );
};

export default InfoCarrera;
