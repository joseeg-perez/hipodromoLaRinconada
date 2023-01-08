import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Card,
  Form,
  FormLabel,
  Col,
  Button,
} from "react-bootstrap";
import CardLugar from "../componentes/layout/CardLugar";
import CardTelefono from "../componentes/layout/CardTelefono";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardLugarEdit from "../componentes/layout/CardLugarEdit";
import CardTelefonoEdit from "../componentes/layout/CardTelefonoEdit";

const PropietarioUpdate = (props) => {
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
  const [correo, setcorreo] = useState("");
  const [extension, setExtension] = useState("");
  const [cuerpo, setCuerpo] = useState("");
  const [fk_lugar, setFk_lugar] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/propietarios/${Params.propietarioId}`)
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
        setcorreo(res.data.data[0].correo);
        setFk_lugar(res.data.data[0].fk_lugar);
        setExtension(res.data.data[0].extension);
        setCuerpo(res.data.data[0].cuerpo);
      })
      .catch((err) => console.log(err));
  }, []);

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
  const handleCorreo = (event) => {
    setcorreo(event.target.value);
  };

  const handleExtension = (event) => {
    setExtension(event.target.value);
  };

  const handleCuerpo = (event) => {
    setCuerpo(event.target.value);
  };

  var fkLugar = fk_lugar;
  const handleLugar = (enteredLugar) => {
    fkLugar = enteredLugar;
    console.log(fkLugar);
  };

  const handleData = async (event) => {
    event.preventDefault();
    // try {
    //   await axios.post(
    //     "http://localhost:5000/api/v1/propietarios/registrar_propietario",
    //     {
    //       cedulaPersona,
    //       nombre1Persona,
    //       nombre2Persona,
    //       apellido1Persona,
    //       apellido2Persona,
    //       fechaNacimiento,
    //       correo,
    //       extension,
    //       cuerpo,
    //       fkLugar,
    //     }
    //   );
    // } catch (error) {
    //   throw error;
    // }
    console.warn(
      cedulaPersona,
      nombre1Persona,
      nombre2Persona,
      apellido1Persona,
      apellido2Persona,
      fechaNacimiento,
      correo,
      extension,
      cuerpo,
      fkLugar
    );
    setCedulaPersona("");
    setnombre1Persona("");
    setnombre2Persona("");
    setapellido1Persona("");
    setapellido2Persona("");
    setFechaNacimiento("");
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="mx-5 mt-3">
          <Card.Body className="px-4">
            <Form>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Editar Propietario
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
                <Col>
                  <div className="mb-3 form-floating">
                    <input
                      value={correo}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleCorreo}
                    />
                    <FormLabel>Correo electrónico</FormLabel>
                  </div>
                </Col>
              </Row>
              <CardLugarEdit onSaveLugar={handleLugar} lugar={fk_lugar} />
              <Card className="mx-5 mt-3">
                <Card.Body>
                  <Card.Title>Telefono de contacto: </Card.Title>
                  <Card.Body>
                    <Row>
                      <Col>
                        <div className="mb-3 form-floating">
                          <input
                            value={extension}
                            type="number"
                            className="form-control"
                            placeholder="First name"
                            onChange={handleExtension}
                          />
                          <FormLabel>Prefijo</FormLabel>
                        </div>
                      </Col>
                      <Col>
                        <div className="mb-3 form-floating">
                          <input
                            value={cuerpo}
                            type="number"
                            className="form-control"
                            placeholder="First name"
                            onChange={handleCuerpo}
                          />
                          <FormLabel>Número</FormLabel>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card.Body>
              </Card>
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

export default PropietarioUpdate;
