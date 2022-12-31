import React, { useState, useEffect } from "react";
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
import axios from "axios";

export const RegistrarJinete = () => {
  const [cedulaJinete, setCedulaJinete] = useState("");
  const [pnombreJinete, setPnombreJinete] = useState("");
  const [snombreJinete, setSnombreJinete] = useState("");
  const [papellidoJinete, setPapellidoJinete] = useState("");
  const [sapellidoJinete, setSapellidoJinete] = useState("");
  const [fecha_nacJinete, setFecha_nacJinete] = useState("");
  const [rangoJinete, setRangoJinete] = useState("");
  const [alturaJinete, setAlturaJinete] = useState("");
  const [pesoJinete, setPesoJinete] = useState("");
  const [togglePeso, setTogglePeso] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [rangos, setRangos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/rango_jinetes/listado_de_rgoJinetes")
      .then((res) => {
        // console.log(res);
        setRangos(res.data);
        setLoading(false);
      });
    //   .catch((err) => console.log(err));
  }, []);

  console.log(rangos);

  if (isLoading) {
    return <div></div>;
  }

  const handleCedula = (event) => {
    setCedulaJinete(event.target.value);
  };
  const handlePnombre = (event) => {
    setPnombreJinete(event.target.value);
  };
  const handleSnombre = (event) => {
    setSnombreJinete(event.target.value);
  };
  const handlePapellido = (event) => {
    setPapellidoJinete(event.target.value);
  };
  const handleSapellido = (event) => {
    setSapellidoJinete(event.target.value);
  };
  const handleFecha_nac = (event) => {
    setFecha_nacJinete(event.target.value);
  };
  const handleRango = (event) => {
    setRangoJinete(event.target.value);
    setTogglePeso(true);
  };
  const handleAltura = (event) => {
    setAlturaJinete(event.target.value);
  };
  const handlePeso = (event) => {
    setPesoJinete(event.target.value);
  };

  const handleData = (event) => {
    event.preventDefault();
    console.warn(
      cedulaJinete,
      pnombreJinete,
      snombreJinete,
      papellidoJinete,
      sapellidoJinete,
      fecha_nacJinete,
      rangoJinete,
      alturaJinete,
      pesoJinete
    );
    setCedulaJinete("");
    setPnombreJinete("");
    setSnombreJinete("");
    setPapellidoJinete("");
    setSapellidoJinete("");
    setFecha_nacJinete("");
    setRangoJinete("");
    setAlturaJinete("");
    setPesoJinete("");
  };

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="mx-5 mt-3">
          <Card.Body className="px-4">
            <Form>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Registro de Jinete
              </h3>
              <Row className="align-items-center">
                <Col>
                  <div className="mb-3 form-floating">
                    <input
                      value={cedulaJinete}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleCedula}
                    />
                    <FormLabel>Cédula</FormLabel>
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={pnombreJinete}
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
                      value={snombreJinete}
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
                      value={papellidoJinete}
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
                      value={sapellidoJinete}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleSapellido}
                    />
                    <FormLabel>Segundo apellido</FormLabel>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center my-2">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={fecha_nacJinete}
                      type="date"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleFecha_nac}
                    />
                    <FormLabel>Fecha de nacimiento</FormLabel>
                  </div>
                </Col>
                <Col md="6" className="mb-3">
                  <div
                    className="form-floating"
                    value={rangoJinete}
                    onChange={handleRango}
                  >
                    <FormSelect>
                      {rangos.map((rango) => (
                        <option value={rango} key={rango.key}>
                          {rango.nombre}
                        </option>
                      ))}
                    </FormSelect>
                    <FormLabel>Rango del Jinete</FormLabel>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={alturaJinete}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleAltura}
                    />
                    <FormLabel>Altura (cm)</FormLabel>
                  </div>
                </Col>

                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={pesoJinete}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handlePeso}
                      disabled={!togglePeso}
                    />
                    <FormLabel>
                      {togglePeso ? (
                        <span>
                          {rangoJinete.peso_min} kg - {rangoJinete.peso_max} kg
                        </span>
                      ) : (
                        <span> Peso (kg)</span>
                      )}
                    </FormLabel>
                  </div>
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
