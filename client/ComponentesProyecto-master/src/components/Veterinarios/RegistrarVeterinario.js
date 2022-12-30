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

export const RegistrarVeterinario = () => {
  const [cedulaVeterinario, setCedulaVeterinario] = useState("");
  const [pnombreVeterinario, setPnombreVeterinario] = useState("");
  const [snombreVeterinario, setSnombreVeterinario] = useState("");
  const [papellidoVeterinario, setPapellidoVeterinario] = useState("");
  const [sapellidoVeterinario, setSapellidoVeterinario] = useState("");
  const [fecha_nacVeterinario, setFecha_nacVeterinario] = useState("");

  const handleCedula = (event) => {
    setCedulaVeterinario(event.target.value);
  };
  const handlePnombre = (event) => {
    setPnombreVeterinario(event.target.value);
  };
  const handleSnombre = (event) => {
    setSnombreVeterinario(event.target.value);
  };
  const handlePapellido = (event) => {
    setPapellidoVeterinario(event.target.value);
  };
  const handleSapellido = (event) => {
    setSapellidoVeterinario(event.target.value);
  };
  const handleFecha_nac = (event) => {
    setFecha_nacVeterinario(event.target.value);
  };

  const handleData = (event) => {
    event.preventDefault();
    console.warn(
      cedulaVeterinario,
      pnombreVeterinario,
      snombreVeterinario,
      papellidoVeterinario,
      sapellidoVeterinario,
      fecha_nacVeterinario
    );
    setCedulaVeterinario("");
    setPnombreVeterinario("");
    setSnombreVeterinario("");
    setPapellidoVeterinario("");
    setSapellidoVeterinario("");
    setFecha_nacVeterinario("");
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="mx-5 mt-3">
          <Card.Body className="px-4">
            <Form>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Registro de Veterinario
              </h3>
              <Row className="align-items-center">
                <Col>
                  <div className="mb-3 form-floating">
                    <input
                      value={cedulaVeterinario}
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
                      value={fecha_nacVeterinario}
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
                      value={pnombreVeterinario}
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
                      value={snombreVeterinario}
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
                      value={papellidoVeterinario}
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
                      value={sapellidoVeterinario}
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
