import React, { useState } from "react";
import {
  Container,
  Row,
  Card,
  Form,
  FormLabel,
  Col,
  Button,
} from "react-bootstrap";
import axios from "axios";

const CaballerizaAgregar = (props) => {
  const [cantidadPuestos, setcantidadPuestos] = useState("");

  const handlePuestos = (event) => {
    setcantidadPuestos(event.target.value);
  };

  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/caballerizas/registrar_caballeriza",
        {
          cantidadPuestos,
        }
      );
    } catch (error) {
      throw error;
    }
    console.warn(cantidadPuestos);
    setcantidadPuestos("");
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="mx-5 mt-3 w-75">
          <Card.Body className="px-4">
            <Form>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Registro de Caballeriza
              </h3>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={cantidadPuestos}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handlePuestos}
                    />
                    <FormLabel>Cantidad de puestos de la caballeriza</FormLabel>
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <Button
                className="mb-4 mt-4 align"
                size="lg"
                type="submit"
                onClick={handleData}
              >
                Registrar Caballeriza
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default CaballerizaAgregar;
