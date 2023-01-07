import React, { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";
import axios from "axios";

const InfoPelaje = (props) => {
  const handleDelete = (event) => {
    console.log(props.codigo);
    axios
      .delete(`http://localhost:5000/api/v1/pelajes/${props.codigo}`)
      .then((res) => {
        if (res.data != null) {
          alert("Se borró con exito el pelaje pa");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card className="mx-5 mt-3">
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Col className="text-end mt-3">
          <Card.Text className="text-center">({props.abrev})</Card.Text>
          <Button className="btn btn-light btn-outline-success btn-sm mx-1">
            <img src={edit} alt="/" width={20} />
          </Button>

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

export default InfoPelaje;
