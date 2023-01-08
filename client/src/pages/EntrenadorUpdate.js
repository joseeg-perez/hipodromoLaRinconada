import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FormLabel,
  FormSelect,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

const EntrenadorUpdate = (props) => {
  const Params = useParams();
  const [cedulaPersona, setCedulaPersona] = useState("");
  const [nombre1Persona, setnombre1Persona] = useState("");
  const [nombre2Persona, setnombre2Persona] = useState("");
  const [apellido1Persona, setapellido1Persona] = useState("");
  const [apellido2Persona, setapellido2Persona] = useState("");
  const [fechaNacimiento, setfechaNacimiento] = useState("");
  const [caballerizas, setfkCaballerizas] = useState("");
  const [fkCaballeriza, setfkCaballeriza] = useState("");
  const [toggleCaballeriza, setToggleCaballeriza] = useState(false);
  const [Entrenador, setEntrenador] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log(Params.entrenadorId);
    axios
      .get(`http://localhost:5000/api/v1/entrenadores/${Params.entrenadorId}`)
      .then((res) => {
        console.log(res);
        setCedulaPersona(res.data.data[0].cedula_persona);
        setnombre1Persona(res.data.data[0].nombre1_persona);
        setnombre2Persona(res.data.data[0].nombre2_persona);
        setapellido1Persona(res.data.data[0].apellido1_persona);
        setapellido2Persona(res.data.data[0].apellido2_persona);
        setfechaNacimiento(res.data.data[0].fecha_nacimiento_persona);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleCedula = (event) => {
    setCedulaPersona(event.target.value);
  };
  const handlenombre1 = (event) => {
    setnombre1Persona(event.target.value);
  };
  const handlenombre2 = (event) => {
    setnombre2Persona(event.target.value);
  };
  const handleapellido1 = (event) => {
    setapellido1Persona(event.target.value);
  };
  const handleapellido2 = (event) => {
    setapellido2Persona(event.target.value);
  };
  const handleFecha_nac = (event) => {
    setfechaNacimiento(event.target.value);
  };

  const handleCaballeriza = (event) => {
    setfkCaballeriza(event.target.value);
    setToggleCaballeriza(true);
  };

  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5000/api/v1/entrenadores/${Params.entrenadorId}`,
        {
          cedulaPersona,
          nombre1Persona,
          nombre2Persona,
          apellido1Persona,
          apellido2Persona,
          fechaNacimiento,
          fkCaballeriza,
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
      fkCaballeriza
    );
    setCedulaPersona("");
    setnombre1Persona("");
    setnombre2Persona("");
    setapellido1Persona("");
    setapellido2Persona("");
    setfechaNacimiento("");
  };
  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="mx-5 mt-3">
          <Card.Body className="px-4">
            <Form>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Editar entrenador
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
              </Row>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={nombre1Persona}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handlenombre1}
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
                      onChange={handlenombre2}
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
                      onChange={handleapellido1}
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
                      onChange={handleapellido2}
                    />
                    <FormLabel>Segundo apellido</FormLabel>
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

export default EntrenadorUpdate;
