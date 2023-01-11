import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FormLabel,
  FormSelect,
  Button,
  Table,
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { CirclePicker } from "react-color";

const StudAgregar = () => {
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [nombreStud, setNombreStud] = useState("");
  const [propietarioStud, setPropietarioStud] = useState("");
  const [togglePropietario, setTogglePropietario] = useState(false);
  const [toggleVestimenta, setToggleVestimenta] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [propietarios, setPropietarios] = useState([]);
  const [vestimentasDispo, setVestimentasDispo] = useState([]);
  const [vestimentas, setVestimentas] = useState([]);
  const [vestimenta, setVestimenta] = useState("");
  const [color, setColor] = useState("#fff");
  const [colores, setColores] = useState("#fff");
  const [color1stud, setColor1stud] = useState("#fff");
  const [color2stud, setColor2stud] = useState("#fff");
  const [togglecolor, setToggleColor] = useState(false);
  const [toggleboton, setToggleBoton] = useState(false);
  const [toggleAgregarVestimenta, setToggleAgregarVestimenta] = useState(false);

  const handleFechaCreacion = (event) => {
    setFechaCreacion(event.target.value);
  };
  const handleNombreStud = (event) => {
    setNombreStud(event.target.value);
  };
  const handlePropietario = (event) => {
    setPropietarioStud(event.target.value);
    setTogglePropietario(true);
  };

  const handleColor = (color, event) => {
    setColor(color.hex);
    setToggleAgregarVestimenta(true);
  };
  const handleColor1 = (color, event) => {
    setColor1stud(color.hex);
  };
  const handleColor2 = (color, event) => {
    setColor2stud(color.hex);
  };
  const handleToggleColor = (event) => {
    setToggleColor(true);
  };

  const handleVestimenta = (event) => {
    setToggleBoton(true);
    setToggleVestimenta(true);
    setVestimenta(event.target.value);
  };
  const handleVestimentas = (event) => {
    setToggleAgregarVestimenta(false);
    setToggleColor(false);
    setToggleBoton(false);
    const vestimentaStud = {
      codigo: vestimenta,
      colorV: color,
    };
    setVestimentas((vestimentas) => [...vestimentas, vestimentaStud]);
  };

  const handleData = async (event) => {
    event.preventDefault();
    const color1 = colores.data.find(
      (color) => color.codigo_del_color == color1stud
    ).id_color;
    const color2 = colores.data.find(
      (color) => color.codigo_del_color == color2stud
    ).id_color;
    console.log(vestimentas);
    vestimentas.map(
      (vestimenta) =>
        (vestimenta.colorV = colores.data.find(
          (colorD) => colorD.codigo_del_color == vestimenta.colorV
        ).id_color)
    );
    try {
      await axios.post("http://localhost:5000/api/v1/studs/registrar_stud", {
        fechaCreacion,
        nombreStud,
        propietarioStud,
        color1,
        color2,
        vestimentas,
      });
    } catch (error) {
      throw error;
    }
    console.log(color2stud);

    console.warn(
      fechaCreacion,
      nombreStud,
      propietarioStud,
      color1,
      color2,
      vestimentas
    );
    setColor1stud("");
    setColor2stud("");
    setFechaCreacion("");
    setNombreStud("");
    setPropietarioStud("");
    setVestimentas([]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/propietarios/listado_de_propietarios")
      .then((res) => {
        console.log(res);
        setPropietarios(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/v1/vestimentas/listado_de_vestimentas")
      .then((res) => {
        console.log(res);
        setVestimentasDispo(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/v1/colores/listado_de_colores")
      .then((res) => {
        console.log(res);
        setColores(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(propietarios);
  console.log(vestimentasDispo);
  console.log(vestimentas);
  console.log(color1stud);
  console.log(colores);

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
                Registro de Stud
              </h3>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={nombreStud}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleNombreStud}
                    />
                    <FormLabel>Nombre Stud</FormLabel>
                  </div>
                </Col>
                <Col className="mb-4">
                  <Col>
                    <FormLabel>Propietario:</FormLabel>
                    <FormSelect onChange={handlePropietario}>
                      <option value={-1} disabled={togglePropietario}>
                        Propietario
                      </option>
                      {propietarios.data.map((propietario) => (
                        <option
                          value={propietario.codigo_persona}
                          key={propietario.codigo_persona}
                        >
                          {propietario.nombre1_persona} <span> </span>
                          {propietario.apellido1_persona}
                        </option>
                      ))}
                    </FormSelect>
                    <Link
                      size="sm"
                      to={`/propietarios/createPropietario`}
                      className="text-center"
                    >
                      <p>No está registrado el propietario?</p>
                    </Link>
                  </Col>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={fechaCreacion}
                      type="date"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleFechaCreacion}
                    />
                    <FormLabel>Fecha de creacion</FormLabel>
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <Card className="mt-3">
                <Card.Body>
                  <Card.Title>Vestimentas del stud</Card.Title>
                  <Row>
                    <Col className="col-4">
                      <FormSelect className="mt-3" onChange={handleVestimenta}>
                        <option key={-1} disabled={toggleVestimenta}>
                          Vestimenta
                        </option>
                        {vestimentasDispo.data.map((vestimenta) => (
                          <option
                            value={vestimenta.codigo_vestimenta}
                            key={vestimenta.codigo_vestimenta}
                          >
                            {vestimenta.nombre_vestimenta}
                          </option>
                        ))}
                      </FormSelect>
                      {toggleAgregarVestimenta && (
                        <Button className="sm mt-4" onClick={handleVestimentas}>
                          Agregar Vestimenta
                        </Button>
                      )}
                    </Col>
                    <Col className="col-4">
                      <Button
                        className="mt-3"
                        onClick={handleToggleColor}
                        disabled={!toggleboton}
                      >
                        Color
                      </Button>
                      {togglecolor && (
                        <CirclePicker
                          className="mt-3"
                          onChangeComplete={handleColor}
                        />
                      )}
                    </Col>
                    <Col className="col-4">
                      <Table>
                        <thead>
                          <tr>
                            <th>Vestimenta</th>
                            <th>Color</th>
                          </tr>
                        </thead>
                        <tbody>
                          {vestimentas.map((vestimentaS) => (
                            <tr>
                              <td>
                                {
                                  vestimentasDispo.data.find(
                                    (vestimenta) =>
                                      vestimenta.codigo_vestimenta ==
                                      vestimentaS.codigo
                                  ).nombre_vestimenta
                                }
                              </td>
                              <td
                                className="col-1 rounded"
                                style={{ backgroundColor: vestimentaS.colorV }}
                              ></td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mt-3">
                <Card.Body>
                  <Card.Title>Colores del stud</Card.Title>
                  <Row>
                    <Col className="col-6">
                      <h5 className="mt-3 text-muted">Color 1 del Stud:</h5>
                      <CirclePicker
                        className="mt-3"
                        onChangeComplete={handleColor1}
                      />
                      <h5 className="mt-3 text-muted">Color 2 del Stud:</h5>
                      <CirclePicker
                        className="mt-3"
                        onChangeComplete={handleColor2}
                      />
                    </Col>
                    <Col className="col-6 mx-auto my-auto">
                      <Card className="w-50">
                        <Card.Body>
                          <Col
                            className="square p-5 rounded-top"
                            style={{ backgroundColor: color1stud }}
                          ></Col>
                          <Col
                            className="square p-5 rounded-bottom"
                            style={{ backgroundColor: color2stud }}
                          ></Col>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
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

export default StudAgregar;
