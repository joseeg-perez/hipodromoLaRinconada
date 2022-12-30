import React, { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  FormLabel,
  FormSelect,
  FormGroup,
  Form,
  Button,
} from "react-bootstrap";
import { CardLugar } from "../Lugar/CardLugar";

export const RegistrarEntrenador = () => {
  const [cedulaEntrenador, setCedulaEntrenador] = useState("");
  const [pnombreEntrenador, setPnombreEntrenador] = useState("");
  const [snombreEntrenador, setSnombreEntrenador] = useState("");
  const [papellidoEntrenador, setPapellidoEntrenador] = useState("");
  const [sapellidoEntrenador, setSapellidoEntrenador] = useState("");
  const [fecha_nacEntrenador, setFecha_nacEntrenador] = useState("");

  const handleCedula = (event) => {
    setCedulaEntrenador(event.target.value);
  };
  const handlePnombre = (event) => {
    setPnombreEntrenador(event.target.value);
  };
  const handleSnombre = (event) => {
    setSnombreEntrenador(event.target.value);
  };
  const handlePapellido = (event) => {
    setPapellidoEntrenador(event.target.value);
  };
  const handleSapellido = (event) => {
    setSapellidoEntrenador(event.target.value);
  };
  const handleFecha_nac = (event) => {
    setFecha_nacEntrenador(event.target.value);
  };

  const handleData = (event) => {
    event.preventDefault();
    console.warn(
      cedulaEntrenador,
      pnombreEntrenador,
      snombreEntrenador,
      papellidoEntrenador,
      sapellidoEntrenador,
      fecha_nacEntrenador
    );
    setCedulaEntrenador("");
    setPnombreEntrenador("");
    setSnombreEntrenador("");
    setPapellidoEntrenador("");
    setSapellidoEntrenador("");
    setFecha_nacEntrenador("");
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="mx-5 mt-3">
          <Card.Body className="px-4">
            <Form>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Registro de Entrenador
              </h3>
              <Row className="align-items-center">
                <Col>
                  <div className="mb-3 form-floating">
                    <input
                      value={cedulaEntrenador}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleCedula}
                    />
                    <FormLabel>Cédula</FormLabel>
                  </div>
                </Col>
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={fecha_nacEntrenador}
                      type="date"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleFecha_nac}
                    />
                    <FormLabel>Fecha de nacimiento</FormLabel>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={pnombreEntrenador}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handlePnombre}
                    />
                    <FormLabel>Primer nombre</FormLabel>
                  </div>
                </Col>

                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={snombreEntrenador}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleSnombre}
                    />
                    <FormLabel>Segundo Nombre</FormLabel>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={papellidoEntrenador}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handlePapellido}
                    />
                    <FormLabel>Primer apellido</FormLabel>
                  </div>
                </Col>

                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={sapellidoEntrenador}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleSapellido}
                    />
                    <FormLabel>Segundo apellido</FormLabel>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormLabel>Stud:</FormLabel>
                  <FormSelect>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                  </FormSelect>
                </Col>
                <Col>
                  <FormLabel>Caballeriza:</FormLabel>
                  <FormSelect>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                  </FormSelect>
                </Col>
              </Row>
              <Button
                className="mb-4 mt-4 align"
                size="lg"
                type="submit"
                onClick={handleData}
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
