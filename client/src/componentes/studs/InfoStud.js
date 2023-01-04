import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";
const InfoStud = (props) => {
  return (
    <Col className="my-3">
      <Card className="w-100">
        <Card.Body>
          <Row>
            <h5>{props.nombre}</h5>
          </Row>

          <Row className="row row-cols-2">
            <Col className="d-flex align-items-stretch col-5">
              <Row className="row row-cols-2 flex-fill">
                <Col
                  className="rounded-left"
                  style={{ backgroundColor: "#DEC618" }}
                ></Col>

                <Col
                  className="rounded-right"
                  style={{ backgroundColor: "#9900FF" }}
                ></Col>
              </Row>
            </Col>

            <Col className="col-6 ms-3">
              <Row className="text-center align-content-center">
                <p>{props.record}</p>
              </Row>
              <Row className="">
                <div className="justify-content-end mt-4 text-end">
                  <Link
                    size="sm"
                    to={`/studs/${props.id}`}
                    className="text-center"
                  >
                    <Button className="btn btn-light btn-outline-primary btn-sm">
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
                  <Button className="btn btn-light btn-outline-danger btn-sm mx-1">
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
