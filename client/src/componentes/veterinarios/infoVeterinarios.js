import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";
import axios from "axios";

const InfoVeterinarios = (props) => {
  const handleDelete = (event) => {
    console.log(props.codigo);
    axios
      .delete(`http://localhost:5000/api/v1/veterinarios/${props.Id}`)
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
          <h2>
            {props.nombre} {props.apellido}
          </h2>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <span className="fw-bold">Caballeriza:</span>{" "}
            <span>{props.caballeriza}</span>
            <div className="mt-2 text-muted">
              (Cantidad de ejemplares a cargo: {props.puestos})
            </div>
          </Card.Text>
          <Card.Text>
            <span className="fw-bold">Está desde:</span>{" "}
            <span>{props.fecha}</span>
          </Card.Text>
          <Col className="text-end">
            <Link
              size="sm"
              to={`/veterinarios/${props.Id}`}
              className="text-center"
            >
              <Button className="btn btn-light btn-outline-primary btn-sm mx-1">
                Mas Info
              </Button>
            </Link>
            <Link
              size="sm"
              to={`/veterinarios/${props.Id}/updateVeterinario`}
              className="text-center"
            >
              <Button className="btn btn-light btn-outline-success btn-sm mx-1">
                <img src={edit} alt="/" width={20} />
              </Button>
            </Link>

            <Button className="btn btn-light btn-outline-danger btn-sm mx-1">
              <img src={trash} alt="/" width={20} />
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InfoVeterinarios;
