import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";

export const CardEntrenador = (props) => {
  return (
    <Col>
      <Card className="mt-5">
        <Card.Header>
          <h2>
            {props.nombre} {props.apellido}
          </h2>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <span className="fw-bold">Stud:</span> <span>{props.stud}</span>
          </Card.Text>
          <Card.Text>
            <span className="fw-bold">Caballeriza:</span>{" "}
            <span>{props.caballeriza}</span>
          </Card.Text>
          <Col className="text-end">
            <Button className="btn btn-light btn-outline-primary btn-sm mx-1">
              <text>Ver más</text>
            </Button>
            <Button className="btn btn-light btn-outline-success btn-sm mx-1">
              <img src={edit} alt="/" width={20} />
            </Button>

            <Button className="btn btn-light btn-outline-danger btn-sm mx-1">
              <img src={trash} alt="/" width={20} />
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
};
