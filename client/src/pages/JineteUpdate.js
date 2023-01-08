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
import { useParams } from "react-router-dom";

const JineteUpdate = () => {
  const Params = useParams();
  const [cedulaPersona, setCedulaPersona] = useState("");
  const [nombre1Persona, setnombre1Persona] = useState("");
  const [nombre2Persona, setnombre2Persona] = useState("");
  const [apellido1Persona, setapellido1Persona] = useState("");
  const [apellido2Persona, setapellido2Persona] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [fkRango, setfkRango] = useState("");
  const [alturaJinete, setAlturaJinete] = useState("");
  const [pesoJinete, setPesoJinete] = useState("");
  const [toggleRango, setToggleRango] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [rangos, setRangos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/jinetes/${Params.jineteId}`)
      .then((res) => {
        console.log(res);
        setCedulaPersona(res.data.data[0].cedula_persona);
        setnombre1Persona(res.data.data[0].nombre1_persona);
        setnombre2Persona(res.data.data[0].nombre2_persona);
        setapellido1Persona(res.data.data[0].apellido1_persona);
        setapellido2Persona(res.data.data[0].apellido2_persona);
        setFechaNacimiento(res.data.data[0].fecha_nacimiento_persona);
        setPesoJinete(res.data.data[0].peso_jinete);
        setAlturaJinete(res.data.data[0].altura_jinete);
        setfkRango(res.data.data[0].fk_rango);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/api/v1/rango_jinetes/listado_de_rgoJinetes")
      .then((res) => {
        console.log(res);
        setRangos(res.data);
        setLoading(false);
      });
    //   .catch((err) => console.log(err));
  }, []);

  console.log(rangos);
  console.log(fkRango);

  if (isLoading) {
    return <div></div>;
  }

  const handleCedula = (event) => {
    setCedulaPersona(event.target.value);
  };
  const handlePnombre = (event) => {
    setnombre1Persona(event.target.value);
  };
  const handleSnombre = (event) => {
    setnombre2Persona(event.target.value);
  };
  const handlePapellido = (event) => {
    setapellido1Persona(event.target.value);
  };
  const handleSapellido = (event) => {
    setapellido2Persona(event.target.value);
  };
  const handleFecha_nac = (event) => {
    setFechaNacimiento(event.target.value);
  };
  const handleRango = (event) => {
    setfkRango(event.target.value);
    setToggleRango(true);
  };
  const handleAltura = (event) => {
    setAlturaJinete(event.target.value);
  };
  const handlePeso = (event) => {
    setPesoJinete(event.target.value);
  };

  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5000/api/v1/jinetes/${Params.jineteId}`,
        {
          cedulaPersona,
          nombre1Persona,
          nombre2Persona,
          apellido1Persona,
          apellido2Persona,
          fechaNacimiento,
          fkRango,
          alturaJinete,
          pesoJinete,
        }
      );
    } catch (error) {
      throw error;
    }
    console.warn(
      cedulaPersona,
      nombre1Persona,
      nombre2Persona,
      apellido1Persona,
      apellido2Persona,
      fechaNacimiento,
      fkRango,
      alturaJinete,
      pesoJinete
    );
    setCedulaPersona("");
    setnombre1Persona("");
    setnombre2Persona("");
    setapellido1Persona("");
    setapellido2Persona("");
    setFechaNacimiento("");
    setfkRango("");
    setAlturaJinete("");
    setPesoJinete("");
    setToggleRango(false);
    setLoading(true);
    setRangos([]);
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
                Editar Jinete
              </h3>
              <Row className="align-items-center">
                <Col>
                  <div className="mb-3 form-floating">
                    <input
                      value={cedulaPersona}
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
                      value={nombre1Persona}
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
                      value={nombre2Persona}
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
                      value={apellido1Persona}
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
                      value={apellido2Persona}
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
                      value={fechaNacimiento}
                      type="date"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleFecha_nac}
                    />
                    <FormLabel>Fecha de nacimiento</FormLabel>
                  </div>
                </Col>
                <Col md="6" className="mb-3">
                  <div className="form-floating">
                    <FormSelect onChange={handleRango}>
                      <option value={-1} disabled={toggleRango}>
                        {
                          rangos.data.find(
                            (rango) => fkRango == rango.codigo_rango
                          ).nombre_rango
                        }
                      </option>
                      {rangos.data.map((rango) => (
                        <option
                          value={rango.codigo_rango}
                          key={rango.codigo_rango}
                        >
                          {rango.nombre_rango}
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
                    />
                    <FormLabel>
                      <span>
                        {
                          rangos.data.find(
                            (rango) => rango.codigo_rango == fkRango
                          ).peso_min
                        }{" "}
                        kg -{" "}
                        {
                          rangos.data.find(
                            (rango) => rango.codigo_rango == fkRango
                          ).peso_max
                        }{" "}
                        kg
                      </span>
                    </FormLabel>
                  </div>
                </Col>
              </Row>
              <Button
                className="mb-4 mt-4 btn-success"
                size="lg"
                type="submit"
                onClick={handleData}
              >
                Confirmar cambios
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
export default JineteUpdate;
