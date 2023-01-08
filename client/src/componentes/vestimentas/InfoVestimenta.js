import React, { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";
import axios from "axios";

const InfoVestimenta = (props) => {
  const handleDelete = (event) => {
    axios
      .delete(`http://localhost:5000/api/v1/vestimentas/${props.Id}`)
      .then((res) => {
        if (res.data != null) {
          alert("Se eliminó la vestimenta con éxito");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card className="mx-5 mt-3">
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Col className="text-end mt-3">
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

export default InfoVestimenta;
