import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";
import axios from "axios";

const InfoStud = (props) => {
  const handleDelete = (event) => {
    console.log(props.codigo);
    axios
      .delete(`http://localhost:5000/api/v1/studs/${props.Id}`)
      .then((res) => {
        if (res.data != null) {
          alert("Se eliminó el Stud con éxito");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Col className="my-3">
      <Card className="w-100">
        <Card.Header>
          <h5>{props.nombre}</h5>
        </Card.Header>
        <Card.Body>
          <Row className="row row-cols-2">
            <Col className="d-flex align-items-stretch col-5">
              <Row className="row row-cols-2 flex-fill">
                <Col
                  className="rounded-left"
                  style={{ backgroundColor: props.color1 }}
                ></Col>

                <Col
                  className="rounded-right"
                  style={{ backgroundColor: props.color2 }}
                ></Col>
              </Row>
            </Col>

            <Col className="col-6 ms-3">
              <Row className="text-start">
                <p className="fw-bold">
                  Propietario:{" "}
                  <span className="text-muted"> {props.propietario}</span>
                </p>
              </Row>
              <Row className="text-start">
                <p className="fw-bold">
                  Está desde: <span className="text-muted"> {props.fecha}</span>
                </p>
              </Row>
              <Row className="">
                <div className="justify-content-end mt-4 text-end ">
                  <Link
                    size="sm"
                    to={`/studs/${props.id}`}
                    className="text-center"
                  >
                    <Button className="btn btn-light btn-outline-primary btn-sm mx-1">
                      Mas Info
                    </Button>
                  </Link>
                  <Link
                    size="sm"
                    to={`/studs/${props.id}/updateStud`}
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
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InfoStud;
