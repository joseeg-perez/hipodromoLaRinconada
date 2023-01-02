import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";
const InfoStud = (props) => {
  return (
    <Container>
      <Row>
        <Card className="w-75 mb-3">
          <Card.Body>
            <Row>
              <h5>{props.nombre}</h5>
            </Row>

            <Row className="row row-cols-2">
              <Col className="d-flex align-items-stretch col-5">
                <Row className="row row-cols-2 flex-fill">
                  <Col style={{ backgroundColor: "#DEC618" }}></Col>

                  <Col style={{ backgroundColor: "#9900FF" }}></Col>
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
                  </div>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default InfoStud;
