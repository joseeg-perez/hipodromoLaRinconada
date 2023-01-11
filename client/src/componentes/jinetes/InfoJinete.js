import React from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";
import axios from "axios";

const InfoJinete = (props) => {
  const handleDelete = (event) => {
    console.log(props.codigo);
    axios
      .delete(`http://localhost:5000/api/v1/jinetes/${props.Id}`)
      .then((res) => {
        if (res.data != null) {
          alert("Se eliminó el jinete con éxito");
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
        <Card.Body className="p-4">
          <div className="d-flex text-black">
            <div className="flex-grow-1 ms-3">
              <Card.Text className="fw-bold">
                <div className="mt-4">
                  Rango: <span className="text-muted">{props.rango}</span>
                </div>

                <div
                  className="d-flex justify-content-center rounded-3 p-2 mt-3"
                  style={{ backgroundColor: "#efefef" }}
                >
                  <div className="mx-3">
                    <p className="small mb-1 fw-bold">Altura</p>
                    <p className="mb-0 text-center text-muted">
                      {props.altura} cm
                    </p>
                  </div>
                  <div className="mx-3">
                    <p className="small mb-1 fw-bold">Peso</p>
                    <p className="mb-0 text-center text-muted">
                      {props.peso} kg
                    </p>
                  </div>
                </div>
              </Card.Text>
              <div className="d-flex pt-1 justify-content-end mt-4">
                <Row className="d-flex align-items-center">
                  <Link
                    size="sm"
                    to={`/jinetes/${props.Id}`}
                    className="text-center"
                  >
                    <Button className="btn btn-light btn-outline-primary btn-sm mx-1">
                      Mas Info
                    </Button>
                  </Link>
                </Row>
                <Link
                  size="sm"
                  to={`/jinetes/${props.Id}/updateJinete`}
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

export default InfoJinete;
