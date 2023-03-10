import React, { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";
import axios from "axios";
import { Link } from "react-router-dom";

const InfoImplemento = (props) => {
  const handleDelete = (event) => {
    console.log(props.codigo);
    axios
      .delete(`http://localhost:5000/api/v1/implementos/${props.codigo}`)
      .then((res) => {
        if (res.data != null) {
          alert("El implemento ha sido eliminado con éxito");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card className="mx-5 mt-3">
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Col className="text-end mt-3">
          <Card.Text className="text-start">{props.descripcion}</Card.Text>
          <Card.Text className="text-center text-muted">
            ({props.abrev})
          </Card.Text>
          <Link
            size="sm"
            to={`/implementos/${props.Id}/updateImplemento`}
            className="text-center"
          >
            <Button className="btn btn-light btn-outline-success btn-sm mx-1">
              <img src={edit} alt="/" width={20} />
            </Button>
          </Link>

          <Button
            className="btn btn-light btn-outline-danger btn-sm mx-1"
            onClick={handleDelete}
          >
            <img src={trash} alt="/" width={20} />
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default InfoImplemento;
