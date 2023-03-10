import React from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";
import axios from "axios";

const InfoEjemplar = (props) => {
  const handleDelete = (event) => {
    console.log(props.codigo);
    axios
      .delete(`http://localhost:5000/api/v1/ejemplares/${props.Id}`)
      .then((res) => {
        if (res.data != null) {
          alert("El ejemplar se ha eliminado con éxito");
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
        <Card.Body className="p-4">
          <div className="d-flex text-black">
            <div className="flex-shrink-0">
              <Image
                style={{ width: "180px", borderRadius: "10px" }}
                src={props.imagen}
                alt="/"
                fluid
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <Card.Text className="fw-bold">
                <div className="mt-4">
                  Hara de procedencia:{" "}
                  <span className="text-muted">{props.hara}</span>
                </div>
                <div className="mt-4">
                  Stud: <span className="text-muted">{props.stud}</span>
                </div>
                <div className="mt-2">
                  Entrenador:{" "}
                  <span className="text-muted">{props.entrenador}</span>
                </div>

                <div
                  className="d-flex justify-content-center rounded-3 p-2 mt-3"
                  style={{ backgroundColor: "#efefef" }}
                >
                  <div>
                    <p className="small mb-1 fw-bold">Caballeriza</p>
                    <p className="mb-0 text-center text-muted">
                      Nro: {props.caballeriza}
                    </p>
                  </div>
                  <div className="px-3">
                    <p className="small fw-bold mb-1">Fecha de nacimiento</p>
                    <p className="mb-0 text-center text-muted">
                      {props.fecha_nacimiento}
                    </p>
                  </div>
                </div>
              </Card.Text>
              <div className="d-flex pt-1 justify-content-end mt-4">
                <Row className="d-flex align-items-center">
                  <Link
                    size="sm"
                    to={`/ejemplares/${props.Id}`}
                    className="text-center"
                  >
                    <Button className="btn btn-light btn-outline-primary btn-sm mx-1">
                      Mas Info
                    </Button>
                  </Link>
                </Row>
                <Link
                  size="sm"
                  to={`/ejemplares/${props.Id}/updateEjemplar`}
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
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InfoEjemplar;
