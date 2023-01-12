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

  const Params = useParams();
  const params = useParams();
  const match = useRouteMatch();
  console.log(params.studId);
  const { studId } = params;
  const [isLoading, setLoading] = useState(true);
  const [isLoading1, setLoading1] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [isLoading3, setLoading3] = useState(true);
  const [isLoading4, setLoading4] = useState(true);
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
  const [nombreEjemplar, setNombreEjemplar] = useState("");
  const [numeroEjemplar, setNumeroEjemplar] = useState("");
  const [tatlabialEjemplar, setTatlabialEjemplar] = useState(0);
  const [precioEjemplar, setPrecioEjemplar] = useState(0);
  const [fecha_nacEjemplar, setFecha_nacEjemplar] = useState(0);
  const [caballeriza, setcaballeriza] = useState("");
  const [nombre_stud, setnombre_stud] = useState("");
  const [entrenador, setentrenador] = useState("");
  const [pesoEjemplar, setPesoEjemplar] = useState("");
  const [padreEjemplar, setPadreEjemplar] = useState("");
  const [madreEjemplar, setMadreEjemplar] = useState("");
  const [imagenEjemplar, setImagenEjemplar] = useState("");
  const [propietarioEjemplar, setPropietarioEjemplar] = useState("");
  const [haraEjemplar, setHaraEjemplar] = useState("");
  const [pelajeEjemplar, setPelajeEjemplar] = useState("");
  const [generoEjemplar, setGeneroEjemplar] = useState("");
  const [ejemplares, setEjemplares] = useState("");
  const [haras, setHaras] = useState([]);
  const [pelajes, setPelajes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/ejemplares/${Params.ejemplarId}`)
      .then((res) => {
        console.log(res);
        setNombreEjemplar(res.data.data[0].nombre_ejemplar);
        setNumeroEjemplar(res.data.data[0].numero_ejemplar);
        setTatlabialEjemplar(res.data.data[0].numero_tatuaje_labial);
        setPrecioEjemplar(res.data.data[0].precio_ejemplar);
        setFecha_nacEjemplar(res.data.data[0].fechanac);
        setPesoEjemplar(res.data.data[0].peso_ejemplar);
        setPadreEjemplar(res.data.data[0].fk_padre_ejemplar);
        setMadreEjemplar(res.data.data[0].fk_madre_ejemplar);
        setImagenEjemplar(res.data.data[0].imagen_ejemplar);
        setHaraEjemplar(res.data.data[0].fk_hara);
        setPelajeEjemplar(res.data.data[0].fk_pelaje);
        setnombre_stud(res.data.data[0].nombre_stud);
        setGeneroEjemplar(res.data.data[0].sexo_ejemplar);
        setcaballeriza(res.data.data[0].codigo_caballeriza);
        setentrenador(res.data.data[0].entrenador);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/v1/ejemplares/listado_de_ejemplares")
      .then((res) => {
        console.log(res);
        setEjemplares(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/v1/haras/listado_de_haras")
      .then((res) => {
        console.log(res);
        setHaras(res.data);
        setLoading1(false);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/v1/pelajes/listado_de_pelajes")
      .then((res) => {
        console.log(res);
        setPelajes(res.data);
        setLoading2(false);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/v1/propietarios/listado_de_propietarios")
      .then((res) => {
        console.log(res);
        setPropietarios(res.data);
        setLoading3(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(propietarios);

  if (isLoading || isLoading1 || isLoading2 || isLoading3) {
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
                <h2>{nombreEjemplar}</h2>
              </Card.Header>
              <Card.Body>
                <Row className="align-items-center">
                  <Col className="col-3">
                    <Image
                      src={imagenEjemplar}
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
                            <span>{entrenador}</span>
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Stud:
                            </span>{" "}
                            {nombre_stud}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Fecha de nacimiento:
                            </span>{" "}
                            {fecha_nacEjemplar}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Numero:
                            </span>{" "}
                            {numeroEjemplar}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Hara de procedencia:
                            </span>{" "}
                            {
                              haras.data.find(
                                (hara) => (hara.codigo_hara = hara)
                              ).nombre_hara
                            }
                          </li>
                          <li class="display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Pelaje:
                            </span>{" "}
                            {
                              pelajes.data.find(
                                (pelaje) =>
                                  (pelaje.codigo_pelaje = pelajeEjemplar)
                              ).nombre_pelaje
                            }
                          </li>
                        </ul>
                      </Col>
                      <Col>
                        <ul class="list-unstyled mb-1-9">
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Padre:
                            </span>{" "}
                            {padreEjemplar != null ? (
                              <span>
                                {
                                  ejemplares.data.find(
                                    (ejemplar) =>
                                      (ejemplar.codigo_ejemplar == padreEjemplar)
                                  ).nombre_ejemplar
                                }
                              </span>
                            ) : (
                              <span>No tiene un padre registrado</span>
                            )}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Madre:
                            </span>{" "}
                            {madreEjemplar != null ? (
                              <span>
                                {
                                  ejemplares.data.find(
                                    (ejemplar) =>
                                      (ejemplar.codigo_ejemplar == madreEjemplar)
                                  ).nombre_ejemplar
                                }
                              </span>
                            ) : (
                              <span>No tiene una madre registrada</span>
                            )}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Precio:
                            </span>{" "}
                            {precioEjemplar != null ? (
                              <span>{precioEjemplar}$</span>
                            ) : (
                              <span>No tiene precio registrado</span>
                            )}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Peso:
                            </span>{" "}
                            {pesoEjemplar} Kg
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Sexo:
                            </span>{" "}
                            {generoEjemplar}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Caballeriza:
                            </span>
                            Nro. {caballeriza}
                          </li>
                          <li>
                            <div className="d-flex pt-1 justify-content-end mt-4">
                              <Link
                                size="sm"
                                to={`/ejemplares/${Params.ejemplarId}/updateEjemplar`}
                                className="text-center"
                              >
                                <Button className="btn btn-light btn-outline-success btn-sm mx-1">
                                  <img src={edit} alt="/" width={20} />
                                </Button>
                              </Link>
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
