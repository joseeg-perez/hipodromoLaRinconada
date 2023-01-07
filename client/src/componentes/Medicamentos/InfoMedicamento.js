import React from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";
import axios from "axios";

const InfoMedicamento = (props) => {
  const handleDelete = (event) => {
    console.log(props.Id);
    axios
      .delete(`http://localhost:5000/api/v1/medicamentos/${props.Id}`)
      .then((res) => {
        if (res.data != null) {
          alert("Se eliminó el medicamento con éxito");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card className="mx-5 mt-3">
      <Card.Header>{props.nombre}</Card.Header>
      <Card.Body>
        <Card.Text>{props.descripcion}</Card.Text>
        <Col className="text-end">
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
export default InfoMedicamento;
