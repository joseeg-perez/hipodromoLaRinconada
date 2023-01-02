import React from "react";
import { Card, Col, Container } from "react-bootstrap";

const CardEjemplarResultado = (props) => {
  return (
    <Card className="">
      <Card.Body>
        <h6>{props.nombre}</h6>
      </Card.Body>
    </Card>
  );
};

export default CardEjemplarResultado;
