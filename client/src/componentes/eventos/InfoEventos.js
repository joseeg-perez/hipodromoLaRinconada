import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const InfoEventos = (props) => {
  let content;
  
  
  return (
    <Container>
      <Col className="col d-flex justify-content-center">
        <NavLink
          className="d-flex justify-content-center"
          style={{ textDecoration: "none" }}
          to={{
            pathname: props.tipo=="resultados" ? `/resultados/${props.id}`: props.tipo=="carrerasRegistradas" ? `/carreras/${props.id}` : `/evento/registrar/${props.id}`,
            state: { props },
          }}
        >
          <Card className="w-75 mb-3 align-self-center">
            <Card.Body>
              <h4>{`Evento del ${props.fecha}`}</h4>
            </Card.Body>
          </Card>
        </NavLink>
      </Col>
    </Container>
  );
};

export default InfoEventos;
