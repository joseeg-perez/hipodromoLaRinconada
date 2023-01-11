import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import caballo1 from "../assets/caballo1.jpg";
import caballo2 from "../assets/caballo2.jpg";
import caballo3 from "../assets/caballo3.jpg";
import Tabla from "../componentes/tablas/Tabla";
import edit from "../assets/editicon.png";
import trash from "../assets/trashicon.png";
import { useParams, useRouteMatch } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export const EjemplarDetail = () => {
  const Ejemplares = [
    {
      imagen: caballo1,
      nombre: "El burlon",
      numero: 5,
      numero_tatuaje_labial: 27,
      peso: 156,
      precio: 256000,
      hara: "Potricos de Sevilla",
      pelaje: "SuavePa",
      sexo: "M",
      padre: "Luchito",
      madre: "teresita",
      stud: "los toros del hood ",
      fecha_nac: "20/03/04",
      entrenador: "Pablo el matao Paez",
      mejorPos: 2,
      cantidad2do: 23,
      ganancia: 200,
    },
    {
      imagen: caballo2,
      nombre: "EL caballo WHITTEE",
      numero: 7,
      pelaje: "RUlos Chidos",
      sexo: "M",
    },
    {
      imagen: caballo3,
      nombre: "TIro al blanco",
      numero: 10,
      pelaje: "Blanquito",
      sexo: "M",
    },
  ];

  const informacion1 = [
    {
      id: "1",
      nombre: "Alejandro",
      apellido: "Marquez",
      cedula: "28.308.632",
      porcentaje: 54,
    },
    {
      id: "2",
      nombre: "Jose",
      apellido: "Gimenez",
      cedula: "6.089.356",
      porcentaje: 28,
    },
    {
      id: "3",
      nombre: "Yohander",
      apellido: "Hernandez",
      cedula: "29.458.321",
      porcentaje: 18,
    },
  ];

  const informacion2 = [
    {
      id: "1",
      nombre: "Oscar",
      apellido: "Isaac",
      cedula: "28.308.632",
      record: "26-69",
      dinero: "1.200.696 Bs",
    },
    {
      id: "2",
      nombre: "Marco",
      apellido: "Gimenez",
      cedula: "6.089.356",
      record: "2-9",
      dinero: "200.000 Bs",
    },
    {
      id: "3",
      nombre: "Jerry",
      apellido: "Mina",
      cedula: "29.458.321",
      record: "30-36",
      dinero: "2.000.000 Bs",
    },
  ];

  const informacion3 = [
    {
      id: "9",
      nombre: "Alejandrito",
      apellido: "Rodriguez",
      cedula: "28.308.632",
    },
    {
      id: "8",
      nombre: "Karim",
      apellido: "Benzema",
      cedula: "6.089.356",
    },
    {
      id: "7",
      nombre: "Lukita",
      apellido: "Doncic",
      cedula: "29.458.321",
    },
  ];

  const propietario = [
    {
      id: "1",
      nombre: "Alejandro Marquez",
      cedula: "28.308.632",
      fecha_inicio: "8/1/2023",
      porcentaje: 54,
    },
    {
      id: "2",
      nombre: "Jose Gimenez",
      cedula: "6.089.356",
      fecha_inicio: "8/1/2023",
      porcentaje: 28,
    },
    {
      id: "3",
      nombre: "Yohander Hernandez",
      cedula: "29.458.321",
      fecha_inicio: "8/1/2023",
      porcentaje: 18,
    },
  ];

  let columnas1 = (
    <tr>
      <th>Nombre</th>
      <th>Caballeriza</th>
      <th>Puesto</th>
      <th>Fecha_Ingreso</th>
      <th>Stud</th>
    </tr>
  );

  let columnas2 = (
    <tr>
      <th>Nombre</th>
      <th>Cedula</th>
      <th>Fecha_Inicio</th>
      <th>Porcentaje</th>
    </tr>
  );

  const params = useParams();
  const match = useRouteMatch();
  console.log(params.studId);
  const { studId } = params;
  const [isLoading, setLoading] = useState(true);
  const [propietarios, setPropietarios] = useState([]);
  const [propietariosF, setPropietariosF] = useState([]);
  const [toggleListadePropietarios, setToggleListadePropietarios] =
    useState(false);
  const [PropietarioSeleccionado, setPropietarioSeleccionado] = useState("");
  const [toggleSeleccion, setToggleSeleccion] = useState(false);
  const [togglePorcentajes, setTogglePorcentajes] = useState(false);
  const [agregar, setAgregar] = useState(true);
  const [porcentajes, setporcentajes] = useState("");
  const [UltimosPropietarios, setUltimosPropietario] = useState(informacion1);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/propietarios/listado_de_propietarios")
      .then((res) => {
        console.log(res);
        setPropietarios(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(propietarios);

  if (isLoading) {
    return <div></div>;
  }

  const onSeleccionPropietarioHandler = (id, propietario, event) => {
    event.preventDefault();
    console.log(id);
    console.log(propietario);
    setPropietarioSeleccionado(propietario);
    setToggleSeleccion(true);
  };

  const handleTogglePropietarios = (event) => {
    setToggleListadePropietarios(true);
    setAgregar(false);
  };

  const handlePorcentajes = (event) => {
    setToggleListadePropietarios(false);
    setToggleListadePropietarios(false);
    let nuevoPropietario = Object.assign({}, PropietarioSeleccionado, {
      porcentaje: 0,
    });
    console.log(nuevoPropietario);
    // UltimosPropietarios = propietarios;
    // UltimosPropietarios.data.push(nuevoPropietario);
    setUltimosPropietario((prevEstate) => {
      return [...prevEstate, nuevoPropietario];
    });
    console.log(UltimosPropietarios);
    setTogglePorcentajes(true);
  };

  const handleData = (event) => {
    UltimosPropietarios.map(
      (propietario) =>
        (propietario.porcentaje = document.getElementById(propietario.id).value)
    );
    console.log(UltimosPropietarios);
    setTogglePorcentajes(false);
    setAgregar(true);
  };
  const { EjemplarId } = params;

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card className="mx-5">
              <Card.Header>
                <h2>{Ejemplares[0].nombre}</h2>
              </Card.Header>
              <Card.Body>
                <Row className="align-items-center">
                  <Col className="col-3">
                    <Image
                      src={Ejemplares[0].imagen}
                      width={200}
                      rounded={20}
                      alt="/"
                    />
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <ul class="list-unstyled mb-1-9">
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Entrenador:
                            </span>{" "}
                            <span>{Ejemplares[0].entrenador}</span>
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Stud:
                            </span>{" "}
                            {Ejemplares[0].stud}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Fecha de nacimiento:
                            </span>{" "}
                            {Ejemplares[0].fecha_nac}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Numero:
                            </span>{" "}
                            {Ejemplares[0].numero}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Hara de procedencia:
                            </span>{" "}
                            {Ejemplares[0].hara}
                          </li>
                          <li class="display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Pelaje:
                            </span>{" "}
                            {Ejemplares[0].pelaje}
                          </li>
                        </ul>
                      </Col>
                      <Col>
                        <ul class="list-unstyled mb-1-9">
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Padre:
                            </span>{" "}
                            <span>{Ejemplares[0].padre}</span>
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Madre:
                            </span>{" "}
                            {Ejemplares[0].madre}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Precio:
                            </span>{" "}
                            {Ejemplares[0].precio}$
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Peso:
                            </span>{" "}
                            {Ejemplares[0].peso} Kg
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Sexo:
                            </span>{" "}
                            {Ejemplares[0].sexo}
                          </li>
                          <li>
                            <div className="d-flex pt-1 justify-content-end mt-4">
                              <Button className="btn btn-light btn-outline-success btn-sm mx-1">
                                <img src={edit} alt="/" width={20} />
                              </Button>

                              <Button className="btn btn-light btn-outline-danger btn-sm mx-1">
                                <img src={trash} alt="/" width={20} />
                              </Button>
                            </div>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <div className="mt-5">
              <h2 className="ms-5">Tablas</h2>
              <Card className="mb-3 mx-5">
                <Card.Body>
                  <Row>
                    <Tabla
                      titulo="PROPIETARIOS"
                      columnas={columnas1}
                      informacion={informacion1}
                      estilo=" table-hover"
                      funcion={(x) => (
                        <tr>
                          <td>{`${x.nombre}`}</td>
                          <td>{`${x.apellido}`}</td>
                          <td>{`${x.cedula}`}</td>
                          <td>{`${x.porcentaje}`}</td>
                        </tr>
                      )}
                    ></Tabla>
                  </Row>
                  <Button
                    className="mb-2"
                    onClick={handleTogglePropietarios}
                    disabled={!agregar}
                  >
                    Agregar Propietario al ejemplar
                  </Button>
                  <Row>
                    {toggleListadePropietarios && (
                      <Col>
                        <div>
                          <Tabla
                            titulo="PROPIETARIOS DISPONIBLES"
                            columnas={
                              <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Cedula</th>
                              </tr>
                            }
                            informacion={informacion3}
                            estilo=" table-hover"
                            funcion={(x) => (
                              <tr
                                onClick={(e) =>
                                  onSeleccionPropietarioHandler(x.id, x, e)
                                }
                              >
                                <td>{`${x.nombre}`}</td>
                                <td>{`${x.apellido}`}</td>
                                <td>{`${x.cedula}`}</td>
                              </tr>
                            )}
                          ></Tabla>
                          {toggleSeleccion && (
                            <Button
                              className="btn-outline-primary btn-light mb-2"
                              onClick={handlePorcentajes}
                            >
                              Agregar a {PropietarioSeleccionado.nombre}{" "}
                              {PropietarioSeleccionado.apellido} al Stud
                            </Button>
                          )}
                          <Link
                            size="sm"
                            to={`/propietarios/createPropietario`}
                            className="text-start"
                          >
                            <p>No está registrado el propietario?</p>
                          </Link>
                        </div>
                      </Col>
                    )}
                    {togglePorcentajes && (
                      <Col>
                        {console.log(UltimosPropietarios)}
                        <Tabla
                          titulo="MODIFICAR PORCENTAJES"
                          columnas={
                            <tr>
                              <th>Nombre</th>
                              <th>Apellido</th>
                              <th>Cedula</th>
                              <th>%</th>
                            </tr>
                          }
                          informacion={UltimosPropietarios}
                          estilo=" table-hover"
                          funcion={(x) => (
                            <tr>
                              <td>{`${x.nombre}`}</td>
                              <td>{`${x.apellido}`}</td>
                              <td>{`${x.cedula}`}</td>
                              <td>
                                <input
                                  className="col-2 border-0"
                                  id={x.id}
                                  type="number"
                                ></input>
                              </td>
                            </tr>
                          )}
                        ></Tabla>
                        <div className="text-center">
                          <Button className="btn-success" onClick={handleData}>
                            Confirmar cambios
                          </Button>
                        </div>
                      </Col>
                    )}
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
