import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";
import axios from "axios";

const InfoRestaurante = (props) => {
  const handleDelete = (event) => {
    console.log(props.codigo);
    axios
      .delete(`http://localhost:5000/api/v1/restaurantes/${props.Id}`)
      .then((res) => {
        if (res.data != null) {
          alert("Se borró con exito el pelaje pa");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Col>
      <Card className="mt-5">
        <Card.Header>
          <h2>{props.nombre}</h2>
        </Card.Header>
        <Card.Body>
          <Card.Text>{props.descripcion}</Card.Text>
          <Col className="text-start">
            <Card.Text className="fw-bold">
              Ubicado en:{" "}
              <span className="text-end text-muted"> {props.area}</span>
            </Card.Text>
          </Col>
          <Col className="text-start mt-2">
            <Card.Text className="fw-bold">
              Capacidad:
              <span className="text-end text-muted">
                {" "}
                {props.capacidad} personas
              </span>
            </Card.Text>
          </Col>
          <Col className="text-end mt-3">
            <Link
              size="sm"
              to={`/restaurantes/${props.Id}/updateRestaurante`}
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
    </Col>
  );
};
export default InfoRestaurante;
