import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";

export const CardRestaurante = (props) => {
  return (
    <Card className="mx-5">
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>{props.descripcion}</Card.Text>
        <Col className="text-end">
          <p className="fw-bold">Capacidad:</p>
          <span className="text-end"> {props.capacidad}</span>
        </Col>
        <Col className="text-end mt-3">
          <Button className="btn btn-light btn-outline-success btn-sm mx-1">
            <img src={edit} alt="/" width={20} />
          </Button>

          <Button className="btn btn-light btn-outline-danger btn-sm mx-1">
            <img src={trash} alt="/" width={20} />
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
};
