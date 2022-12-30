import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";

export const CardJinete = (props) => {
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
                <div className="mt-2">
                  Ultimo ejemplar montando:{" "}
                  <span className="text-muted">{props.ejemplar}</span>
                </div>

                <div
                  className="d-flex justify-content-center rounded-3 p-2 mt-3"
                  style={{ backgroundColor: "#efefef" }}
                >
                  <div className="mx-3">
                    <p className="small mb-1 fw-bold">Altura</p>
                    <p className="mb-0 text-center text-muted">
                      {props.peso} cm
                    </p>
                  </div>
                  <div className="mx-3">
                    <p className="small mb-1 fw-bold">Peso</p>
                    <p className="mb-0 text-center text-muted">
                      {props.peso} kg
                    </p>
                  </div>
                  <div className="mx-3">
                    <p className="small fw-bold mb-1">Edad</p>
                    <p className="mb-0 text-center text-muted">8</p>
                  </div>
                  <div className="mx-3">
                    <p className="small fw-bold mb-1">Ganancia</p>
                    <p className="mb-0 text-center text-muted">
                      {props.ganancia}
                    </p>
                  </div>
                </div>
              </Card.Text>
              <div className="d-flex pt-1 justify-content-end mt-4">
                <Button className="btn btn-light btn-outline-primary btn-sm mx-1">
                  Ver mas
                </Button>
                <Button className="btn btn-light btn-outline-success btn-sm mx-1">
                  <img src={edit} alt="/" width={20} />
                </Button>

                <Button className="btn btn-light btn-outline-danger btn-sm mx-1">
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
