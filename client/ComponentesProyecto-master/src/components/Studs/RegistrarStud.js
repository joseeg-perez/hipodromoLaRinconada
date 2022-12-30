import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  FormLabel,
  Button,
  FormSelect,
} from "react-bootstrap";

export const RegistrarStud = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="mx-5 mt-3">
          <Card.Body className="px-4">
            <Form>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Registro de Stud
              </h3>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      //   value={nombreStud}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      //   onChange={handleNombre}
                    />
                    <FormLabel>Nombre Stud</FormLabel>
                  </div>
                </Col>
                <Col className="mb-4">
                  <Col>
                    <FormLabel>Propietario:</FormLabel>
                    <FormSelect>
                      <option>1</option>
                      <option>1</option>
                      <option>1</option>
                    </FormSelect>
                  </Col>
                </Col>
                <Col className="mt-2">
                  <Button
                    size="sm"
                    type="submit"
                    // onClick={handleData}
                  >
                    Agregar Propietario
                  </Button>
                </Col>
              </Row>
              <Card className="mt-3">
                <Card.Body></Card.Body>
              </Card>
              <Button
                className="mb-4 mt-4 align"
                size="lg"
                type="submit"
                // onClick={handleData}
              >
                Registrar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
