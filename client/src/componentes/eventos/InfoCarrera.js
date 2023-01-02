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
                  <h5>{`HORA: ${props.hora}`}</h5>
                </Row>
                <Row>
                  <h5>{`DISTANCIA: ${props.distancia}`}</h5>
                </Row>
                <Row>
                  <h5>{`CANTIDAD: ${props.cantidad}`}</h5>
                </Row>
                <Row>
                  <h5>{`EDAD: ${props.edad}`}</h5>
                </Row>
                <Row>
                  <h5>{`PESO: ${props.peso}`}</h5>
                </Row>
                <Row>
                  <h5>{`GENERO: ${props.genero}`}</h5>
                </Row>
                <Row>
                  <h5>{`CAMPEONES: ${props.camp}`}</h5>
                </Row>
                <Row className="row row-cols-2">
                  <Col className="col-8">
                    <h5>{`VICTORIAS: ${props.vic}`}</h5>
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
                          pathname: "/inscribir/ejemplar",
                          state: { props },
                        }}
                      >
                        Inscribir
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
