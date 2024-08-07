import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  FormSelect,
  Table,
} from "react-bootstrap";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import InfoEjemplar from "../componentes/ejemplares/InfoEjemplar";
import TablaCard from "../componentes/layout/TablaCard";
import Tabla from "../componentes/tablas/Tabla";
import StudUpdate from "./StudUpdate";
import imagen from "../assets/caballo1.jpg";
import axios from "axios";
import { CirclePicker } from "react-color";
import Propietarios from "./Propietarios";
import trash from "../assets/trashicon.png";

const StudDetail = () => {
  let columnas1 = (
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Cedula</th>
      <th>%</th>
    </tr>
  );

  let columnas2 = (
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Cedula</th>
      <th>Record</th>
      <th>Dinero</th>
    </tr>
  );
  let columnas3 = (
    <tr>
      <th>Num_Carrera</th>
      <th>Nombre</th>
      <th>Pos</th>
      <th>Intervalo</th>
      <th>Tiempo</th>
      <th>Peso</th>
      <th>Jinete</th>
      <th>Peso_Jinete</th>
    </tr>
  );
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

  const ejemplares = [
    {
      id: "1",
      nombre: "LA FURIA NEGRA",
      entrenador: "Eleazar Ramirez",
      jinete: "Theo Capriles",
      pelaje: "Rojo",
      edad: 8,
      imagen: imagen,
      stud: "Potricos LG",
    },
    {
      id: "2",
      nombre: "LA FURIA NEGRA",
      entrenador: "Eleazar Ramirez",
      jinete: "Theo Capriles",
      pelaje: "Rojo",
      edad: 8,
      imagen: imagen,
      stud: "Potricos LG",
    },
    {
      id: "3",
      nombre: "LA FURIA NEGRA",
      entrenador: "Eleazar Ramirez",
      jinete: "Theo Capriles",
      pelaje: "Rojo",
      edad: 8,
      imagen: imagen,
      stud: "Potricos LG",
    },
    {
      id: "4",
      nombre: "LA FURIA NEGRA",
      entrenador: "Eleazar Ramirez",
      jinete: "Theo Capriles",
      pelaje: "Rojo",
      edad: 8,
      imagen: imagen,
      stud: "Potricos LG",
    },
    {
      id: "5",
      nombre: "LA FURIA NEGRA",
      entrenador: "Eleazar Ramirez",
      jinete: "Theo Capriles",
      pelaje: "Rojo",
      edad: 8,
      imagen: imagen,
      stud: "Potricos LG",
    },
    {
      id: "6",
      nombre: "LA FURIA NEGRA",
      entrenador: "Eleazar Ramirez",
      jinete: "Theo Capriles",
      pelaje: "Rojo",
      edad: 8,
      imagen: imagen,
      stud: "Potricos LG",
    },
  ];

  const resultados1 = [
    {
      id: "1",
      num_carrera: 520,
      nombre: "Furia Roja",
      pos: 1,
      intervalo: "N/A",
      tiempo: "4:20:12 min",
      peso: "150kg",
      jinete: "Leandro Mendoza",
      peso_jinete: "48kg",
    },
    {
      id: "2",
      num_carrera: 520,
      nombre: "Furia Roja",
      pos: 1,
      intervalo: "N/A",
      tiempo: "4:20:12 min",
      peso: "150kg",
      jinete: "Leandro Mendoza",
      peso_jinete: "48kg",
    },
    {
      id: "3",
      num_carrera: 520,
      nombre: "Furia Roja",
      pos: 1,
      intervalo: "N/A",
      tiempo: "4:20:12 min",
      peso: "150kg",
      jinete: "Leandro Mendoza",
      peso_jinete: "48kg",
    },
    {
      id: "4",
      num_carrera: 520,
      nombre: "Furia Roja",
      pos: 1,
      intervalo: "N/A",
      tiempo: "4:20:12 min",
      peso: "150kg",
      jinete: "Leandro Mendoza",
      peso_jinete: "48kg",
    },
    {
      id: "5",
      num_carrera: 520,
      nombre: "Furia Roja",
      pos: 1,
      intervalo: "N/A",
      tiempo: "4:20:12 min",
      peso: "150kg",
      jinete: "Leandro Mendoza",
      peso_jinete: "48kg",
    },
    {
      id: "6",
      num_carrera: 520,
      nombre: "Furia Roja",
      pos: 1,
      intervalo: "N/A",
      tiempo: "4:20:12 min",
      peso: "150kg",
      jinete: "Leandro Mendoza",
      peso_jinete: "48kg",
    },
  ];

  const Params = useParams();
  const params = useParams();
  const [togglecolor, setToggleColor] = useState(false);
  const [toggleboton, setToggleBoton] = useState(false);
  const [toggleAgregarVestimenta, setToggleAgregarVestimenta] = useState(false);
  const [vestimentasDispo, setVestimentasDispo] = useState([]);
  const [vestimentas, setVestimentas] = useState([]);
  const [nuevasVestimentas, setNuevasVestimentas] = useState([]);
  const [vestimenta, setVestimenta] = useState("");
  const [toggleVestimenta, setToggleVestimenta] = useState(false);
  const [color, setColor] = useState("#fff");
  const [colores, setColores] = useState("#fff");
  const [color1stud, setColor1stud] = useState("#fff");
  const [color2stud, setColor2stud] = useState("#fff");
  const [stud, setStud] = useState();
  const fkStud = params.studId;
  const match = useRouteMatch();
  const { studId } = params;
  const [isLoading, setLoading] = useState(true);
  const [isLoading1, setLoading1] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [isLoading3, setLoading3] = useState(true);
  const [isLoading4, setLoading4] = useState(true);
  const [isLoading5, setLoading5] = useState(true);
  const [isLoading6, setLoading6] = useState(true);
  const [propietarios, setPropietarios] = useState([]);
  const [propietariosDisponibles, setPropietariosDisponibles] = useState([]);
  const [toggleListadePropietarios, setToggleListadePropietarios] =
    useState(false);
  const [PropietarioSeleccionado, setPropietarioSeleccionado] = useState("");
  const [toggleSeleccion, setToggleSeleccion] = useState(false);
  const [togglePorcentajes, setTogglePorcentajes] = useState(false);
  const [agregar, setAgregar] = useState(true);
  const [porcentajes, setporcentajes] = useState("");
  const [EjemplaresStud, setEjemplaresStud] = useState("");
  const [UltimosPropietarios, setUltimosPropietario] = useState(informacion1);
  const [toggleAgregarAlStud, setToggleAgregarAlStud] = useState(false)
  const [toggleAgregarVestimentasNuevas, setToggleAgregarVestimentasNuevas] = useState(false)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/studs/${Params.studId}`)
      .then((res) => {
        console.log(res);
        setStud(res.data);
        setLoading6(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:5000/api/v1/studs/propietarios/${Params.studId}`)
      .then((res) => {
        console.log(res);
        setPropietarios(res.data.data);
        setUltimosPropietario(res.data.data);
        setLoading5(false);
      })
      .catch((err) => console.log(err));
    // axios
    //   .get(`http://localhost:5000/api/v1/studs/caballosStud/${Params.studId}`)
    //   .then((res) => {
    //     console.log(res);
    //     setEjemplaresStud(res.data);
    //     setLoading4(false);
    //   })
    //   .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/v1/vestimentas/listado_de_vestimentas")
      .then((res) => {
        console.log(res.data);
        setVestimentasDispo(res.data);
        setLoading3(false);
      })
      .catch((err) => console.log(err));

    axios
      .get(
        `http://localhost:5000/api/v1/studs/propietariosNoStud/${Params.studId}`
      )
      .then((res) => {
        console.log(res);
        setPropietariosDisponibles(res.data);
        setLoading2(false);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/v1/colores/listado_de_colores")
      .then((res) => {
        console.log(res);
        setColores(res.data);
        setLoading1(false);
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:5000/api/v1/studs/vestimentaStud/${Params.studId}`)
      .then((res) => {
        console.log(res.data);
        setVestimentas(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(propietarios);

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

  const handleDelete = (studvestimenta, event) => {
    axios
      .delete(
        `http://localhost:5000/api/v1/studvestimenta/${studvestimenta.Id}`
      )
      .then((res) => {
        if (res.data != null) {
          alert("Se eliminó la vestimenta del stud con éxtio");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleVestimenta = (event) => {
    setToggleBoton(true);
    setToggleVestimenta(true);
    setVestimenta(event.target.value);
  };
  const handleNuevasVestimentas = (event) => {
    setToggleAgregarVestimenta(false);
    setToggleColor(false);
    setToggleBoton(false);
    setToggleAgregarAlStud(true)
    setToggleAgregarVestimentasNuevas(true)
    const vestimentaStud = {
      codigo: vestimenta,
      colorV: color,
    };
    setNuevasVestimentas((vestimentas) => [...vestimentas, vestimentaStud]);
  };

  const HandleAgregarVestimentasNuevas = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/studs/agregarVestimentas", {
        nuevasVestimentas
      });
    } catch (error) {
      throw error;
    }
    setToggleAgregarAlStud(false) 
    setToggleAgregarVestimentasNuevas(false)
  };

  console.log(propietarios);

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

  // const handleDelete = (event) => {
  //   axios
  //     .delete(`http://localhost:5000/api/v1/haras/${props.Id}`)
  //     .then((res) => {
  //       if (res.data != null) {
  //         alert("Se eliminó el hara con éxito");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleDataCambiosPropietario = async (event) => {
    UltimosPropietarios.map(
      (propietario) =>
        (propietario.porcentaje = document.getElementById(
          propietario.idpropietario
        ).value)
    );
    UltimosPropietarios.map((propietario) => (Object.assign({}, propietario, {Stud: Params.studId})))
    console.log("Este es el fkStud: "+fkStud);
    try {
      await axios.post("http://localhost:5000/api/v1/studs/cambiarPorcentajes", {
        UltimosPropietarios,
        fkStud
      });
    } catch (error) {
      throw error;
    }
    //AQUI SE LLAMA AL BACK PARA HACER LO DE LOS PORCENTAJES
    console.log(UltimosPropietarios);
    setTogglePorcentajes(false);
    setAgregar(true);
  };

  console.log(vestimentasDispo);
  console.log(vestimentas);
  console.log(EjemplaresStud);

  if (
    isLoading ||
    isLoading1 ||
    isLoading2 ||
    isLoading3 ||
    isLoading5 ||
    isLoading6
  ) {
    return <div>Loading</div>;
  }

  return (
    <Container>
      <Row className="text-center">
        <h1>{stud.data[0].nombre_stud}</h1>
      </Row>
      <Row>
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Header>
              <Row className="row row-cols-2">
                <Col className="col cols-3">
                  <Row className="row row-cols-3">
                    <Col className="col-3">
                      <h6>COLORES:</h6>
                    </Col>
                    <Col
                      className="offset-3 col-2"
                      style={{
                        backgroundColor: `${stud.data[0].codigo_del_color}`,
                      }}
                    ></Col>
                    <Col
                      className="col-2"
                      style={{
                        backgroundColor: `${stud.data[1].codigo_del_color}`,
                      }}
                    ></Col>
                  </Row>
                </Col>

                <Col className="d-flex justify-content-end">
                  <h6>FECHA CREACION: {stud.data[0].fecha}</h6>
                </Col>
              </Row>
            </Card.Header>

            <Card.Body>
              <Row>
                <Tabla
                  titulo="PROPIETARIOS"
                  columnas={
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Fecha inicio</th>
                      <th>%</th>
                    </tr>
                  }
                  informacion={propietarios}
                  estilo=" table-hover"
                  funcion={(x) => (
                    <tr>
                      <td>{`${x.nombre}`}</td>
                      <td>{`${x.apellido}`}</td>
                      <td>{`${x.fecha_inicio}`}</td>
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
                Agregar Propietario al Stud
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
                        informacion={propietariosDisponibles.data}
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
                              id={x.idpropietario}
                              type="number"
                            ></input>
                          </td>
                        </tr>
                      )}
                    ></Tabla>
                    <div className="text-center">
                      <Button
                        className="btn-success"
                        onClick={handleDataCambiosPropietario}
                      >
                        Confirmar cambios
                      </Button>
                    </div>
                  </Col>
                )}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Col className="justify-content-center align-items-center mx-5 my-4">
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
                  <Button className="sm mt-4" onClick={handleNuevasVestimentas}>
                    Agregar Vestimenta
                  </Button>
                )}
                {toggleAgregarVestimentasNuevas && (
                  <Button className="sm mt-4 btn-success" onClick={HandleAgregarVestimentasNuevas}>
                    Agregar Vestimentas nuevas
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
                <Table className="mx-auto">
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
                                vestimentaS.fk_vestimenta
                            ).nombre_vestimenta
                          }
                        </td>
                        <td
                          className="col-1 rounded"
                          style={{
                            backgroundColor: vestimentaS.codigo_del_color,
                          }}
                        ></td>
                        <td>
                          <Button
                            className="btn btn-light btn-outline-danger btn-sm mx-1"
                            onClick={handleDelete(vestimenta)}
                          >
                            <img src={trash} alt="/" width={20} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tbody>
                    {nuevasVestimentas.map((vestimentaS) => (
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
      </Col>

      {/* <Row>
        <Col>
          <Row className="text-center">
            <h3>CABALLOS DEL STUD</h3>
          </Row>

          <Row className="justify-content-center align-items-center mx-5">
            <Card>
              <Card.Body>
                <Row className="row row-cols-2 my-2 d-flex justify-content-center">
                  {EjemplaresStud.data.map((x) => (
                    <InfoEjemplar
                      imagen={x.imagen_ejemplar}
                      key={x.idejemplar}
                      id={x.idejemplar}
                      nombre={x.nombre}
                      entrenador={x.entrenador}
                      fecha_nacimiento={x.fechanac}
                      stud={stud.data[0].nombre_stud}
                    ></InfoEjemplar>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row> */}

      {/* <Row className="mt-4">
        <Col>
          <Row className="text-center">
            <h3>RESULTADOS DE LOS CABALLOS</h3>
          </Row>

          <Row className="justify-content-center align-items-center mx-5">
            <Card>
              <Card.Body>
                <Tabla
                  titulo="RESULTADOS CARRERAS DE 1100 MTS"
                  columnas={columnas3}
                  informacion={resultados1}
                  funcion={(x) => (
                    <tr>
                      <td>{`${x.num_carrera}`}</td>
                      <td>{`${x.nombre}`}</td>
                      <td>{`${x.pos}`}</td>
                      <td>{`${x.intervalo}`}</td>
                      <td>{`${x.tiempo}`}</td>
                      <td>{`${x.peso}`}</td>
                      <td>{`${x.jinete}`}</td>
                      <td>{`${x.peso_jinete}`}</td>
                    </tr>
                  )}
                ></Tabla>

                <Tabla
                  titulo="RESULTADOS CARRERAS DE 1400 MTS"
                  columnas={columnas3}
                  informacion={resultados1}
                  funcion={(x) => (
                    <tr>
                      <td>{`${x.num_carrera}`}</td>
                      <td>{`${x.nombre}`}</td>
                      <td>{`${x.pos}`}</td>
                      <td>{`${x.intervalo}`}</td>
                      <td>{`${x.tiempo}`}</td>
                      <td>{`${x.peso}`}</td>
                      <td>{`${x.jinete}`}</td>
                      <td>{`${x.peso_jinete}`}</td>
                    </tr>
                  )}
                ></Tabla>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>

      <Row className="d-flex justify-content-end mt-3 mb-3">
        <Col className="col-auto">
          <Link
            className="btn fw-bold"
            style={{
              backgroundColor: "#91B6FA",
              color: "black",
              border: "black",
            }}
            to={`${match.url}/updateStud`}
          >
            EDITAR STUD
          </Link>
        </Col>
        <Col className="col-auto me-5">
          <Button
            className="fw-bold"
            style={{
              backgroundColor: "#FA6660",
              color: "black",
              border: "black",
            }}
          >
            ELIMINAR STUD
          </Button>
        </Col>
      </Row> */}
    </Container>
  );
};

export default StudDetail;
