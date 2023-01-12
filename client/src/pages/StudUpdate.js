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

const StudUpdate = () => {
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
    vestimentas.map(
      (vestimenta) =>
        (vestimenta.colorV = colores.data.find(
          (colorD) => colorD.codigo_del_color == vestimenta.colorV
        ).id_color),
        console.log(vestimenta)
    );
    console.warn(
      fechaCreacion,
      nombreStud,
      propietarioStud,
      color1,
      color2,
      vestimentas
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
                Editar Stud
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

export default StudUpdate;






















// import React from "react";
// import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import Tabla from "../componentes/tablas/Tabla";

// const StudUpdate = () => {
//   let columnas1 = (
//     <tr>
//       <th>Nombre</th>
//       <th>Caballeriza</th>
//       <th>Puesto</th>
//       <th>Fecha_Ingreso</th>
//       <th>Stud</th>
//     </tr>
//   );

//   let columnas2 = (
//     <tr>
//       <th>Nombre</th>
//       <th>Caballeriza</th>
//       <th>Victorias</th>
//       <th>Fecha_Ingreso</th>
//       <th>Stud</th>
//     </tr>
//   );

//   let columnas3 = (
//     <tr>
//       <th>Nombre</th>
//       <th>Apellido</th>
//       <th>%</th>
//       <th>Cedula</th>
//       <th>Stud</th>
//     </tr>
//   );

//   const ejemplares = [
//     {
//       id: "1",
//       nombre: "Furia Negra",
//       caballeriza: 1,
//       puesto: 40,
//       fecha_ingreso: "08/04/2018",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "2",
//       nombre: "Furia Negra",
//       caballeriza: 1,
//       puesto: 40,
//       fecha_ingreso: "08/04/2018",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "3",
//       nombre: "Furia Negra",
//       caballeriza: 1,
//       puesto: 40,
//       fecha_ingreso: "08/04/2018",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "4",
//       nombre: "Furia Negra",
//       caballeriza: 1,
//       puesto: 40,
//       fecha_ingreso: "08/04/2018",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "5",
//       nombre: "Furia Negra",
//       caballeriza: 1,
//       puesto: 40,
//       fecha_ingreso: "08/04/2018",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "6",
//       nombre: "Furia Negra",
//       caballeriza: 1,
//       puesto: 40,
//       fecha_ingreso: "08/04/2018",
//       stud: "Papa Pedro",
//     },
//   ];

//   const entrenadores = [
//     {
//       id: "1",
//       nombre: "Luka Modric",
//       caballeriza: 1,
//       victorias: 40,
//       fecha_ingreso: "08/04/2018",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "2",
//       nombre: "Luka Modric",
//       caballeriza: 1,
//       victorias: 40,
//       fecha_ingreso: "08/04/2018",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "3",
//       nombre: "Luka Modric",
//       caballeriza: 1,
//       victorias: 40,
//       fecha_ingreso: "08/04/2018",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "4",
//       nombre: "Luka Modric",
//       caballeriza: 1,
//       victorias: 40,
//       fecha_ingreso: "08/04/2018",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "5",
//       nombre: "Luka Modric",
//       caballeriza: 1,
//       victorias: 40,
//       fecha_ingreso: "08/04/2018",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "6",
//       nombre: "Luka Modric",
//       caballeriza: 1,
//       victorias: 40,
//       fecha_ingreso: "08/04/2018",
//       stud: "Papa Pedro",
//     },
//   ];

//   const propietarios = [
//     {
//       id: "1",
//       nombre: "Luka",
//       apellido: "Modric",
//       porcentaje: 40,
//       cedula: "28.308.694",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "2",
//       nombre: "Luka",
//       apellido: "Modric",
//       porcentaje: 40,
//       cedula: "28.308.694",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "3",
//       nombre: "Luka",
//       apellido: "Modric",
//       porcentaje: 40,
//       cedula: "28.308.694",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "4",
//       nombre: "Luka",
//       apellido: "Modric",
//       porcentaje: 40,
//       cedula: "28.308.694",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "5",
//       nombre: "Luka",
//       apellido: "Modric",
//       porcentaje: 40,
//       cedula: "28.308.694",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "6",
//       nombre: "Luka",
//       apellido: "Modric",
//       porcentaje: 40,
//       cedula: "28.308.694",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "6",
//       nombre: "Luka",
//       apellido: "Modric",
//       porcentaje: 40,
//       cedula: "28.308.694",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "6",
//       nombre: "Luka",
//       apellido: "Modric",
//       porcentaje: 40,
//       cedula: "28.308.694",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "6",
//       nombre: "Luka",
//       apellido: "Modric",
//       porcentaje: 40,
//       cedula: "28.308.694",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "6",
//       nombre: "Luka",
//       apellido: "Modric",
//       porcentaje: 40,
//       cedula: "28.308.694",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "6",
//       nombre: "Luka",
//       apellido: "Modric",
//       porcentaje: 40,
//       cedula: "28.308.694",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "6",
//       nombre: "Luka",
//       apellido: "Modric",
//       porcentaje: 40,
//       cedula: "28.308.694",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "6",
//       nombre: "Luka",
//       apellido: "Modric",
//       porcentaje: 40,
//       cedula: "28.308.694",
//       stud: "Papa Pedro",
//     },
//     {
//       id: "6",
//       nombre: "Luka",
//       apellido: "Modric",
//       porcentaje: 40,
//       cedula: "28.308.694",
//       stud: "Papa Pedro",
//     },
//   ];

//   return (
//     <Container>
//       <Col className="d-flex justify-content-center">
//         <Row
//           className="row row-cols-2 align-self-center rounded-start rounded-end"
//           style={{ backgroundColor: "#68AEDB", width: "550px" }}
//         >
//           <Col className="text-center">
//             <h1>PAPA PEDRO</h1>
//           </Col>

//           <Col className="d-flex justify-content-end">
//             <Row className="row row-cols-2 flex-fill">
//               <Col
//                 className="col-4 offset-4"
//                 style={{ backgroundColor: "#DEC618" }}
//               ></Col>

//               <Col
//                 className="col-4 rounded-end"
//                 style={{ backgroundColor: "#9900FF" }}
//               ></Col>
//             </Row>
//           </Col>
//         </Row>
//       </Col>

//       <Card className="mt-4 mx-5 px-2">
//         <Card.Body>
//           <Row>
//             <Col className="col-auto">
//               <Row>
//                 <h3>Fecha de cambio</h3>
//               </Row>

//               <Row className="ms-0">
//                 <input type="date"></input>
//               </Row>
//             </Col>
//           </Row>

//           <Row className="mt-2">
//             <Row>
//               <Col className="ms-4">
//                 <h3>Buscar Ejemplar a cambiar</h3>
//               </Col>
//             </Row>

//             <Row>
//               <Col>
//                 <Card className="ms-4">
//                   <Card.Body>
//                     <Row className="row-cols-2">
//                       <Col className="col-8">
//                         <Tabla
//                           columnas={columnas1}
//                           informacion={ejemplares}
//                           funcion={(x) => (
//                             <tr>
//                               <td>{`${x.nombre}`}</td>
//                               <td>{`${x.caballeriza}`}</td>
//                               <td>{`${x.puesto}`}</td>
//                               <td>{`${x.fecha_ingreso}`}</td>
//                               <td>{`${x.stud}`}</td>
//                             </tr>
//                           )}
//                         ></Tabla>
//                       </Col>

//                       <Col className="col-3 ms-5">
//                         <Row>
//                           <h4>Filtrar por:</h4>
//                         </Row>
//                         <Row className="row-cols-2">
//                           <Col className="col-auto">
//                             <h5>Nombre</h5>
//                           </Col>

//                           <Col>
//                             <input
//                               placeholder="Buscar"
//                               style={{ width: "160px" }}
//                             ></input>
//                           </Col>
//                         </Row>

//                         <Row className="mt-3 ms-0">
//                           <select style={{ height: "30px" }}>
//                             <option>Edad</option>
//                             <option>Stud</option>
//                             <option>Nro. Victorias</option>
//                           </select>
//                         </Row>

//                         <Row className="mt-3">
//                           <Col className="d-flex justify-content-center">
//                             <Button className="col-5">BUSCAR</Button>
//                           </Col>
//                         </Row>

//                         <Row className="mt-3 text-center">
//                           <p className="fw-bold">
//                             Los cambios de puesto o de caballeriza son decision
//                             de los entrenadores o del Stud
//                           </p>
//                         </Row>
//                       </Col>
//                     </Row>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </Row>

//           <Row>
//             <Col className="d-flex justify-content-center">
//               <Button className="mt-3">CAMBIAR EJEMPLAR DE STUD</Button>
//             </Col>
//           </Row>

//           <Row className="d-flex">
//             <Col className="d-flex justify-content-end">
//               <Row className="row row-cols-1">
//                 <Col className="d-flex justify-content-end">
//                   <Row
//                     lassName="d-flex align-items-end"
//                     style={{ height: "26px" }}
//                   >
//                     <p className="d-flex align-self-end">
//                       No esta registrado el ejemplar?
//                     </p>
//                   </Row>
//                 </Col>

//                 <Col className="d-flex justify-content-end">
//                   <Button size="sm">Agregar Nuevo Ejemplar</Button>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>

//       <Card className="mt-4 mx-5 px-2">
//         <Card.Body>
//           <Row>
//             <Col className="col-auto">
//               <Row>
//                 <h3>Fecha de cambio</h3>
//               </Row>

//               <Row className="ms-0">
//                 <input type="date"></input>
//               </Row>
//             </Col>
//           </Row>

//           <Row className="mt-2">
//             <Row>
//               <Col className="ms-4">
//                 <h3>Buscar Entrenador a cambiar</h3>
//               </Col>
//             </Row>

//             <Row>
//               <Col>
//                 <Card className="ms-4">
//                   <Card.Body>
//                     <Row className="row-cols-2">
//                       <Col className="col-8">
//                         <Tabla
//                           columnas={columnas2}
//                           informacion={entrenadores}
//                           funcion={(x) => (
//                             <tr>
//                               <td>{`${x.nombre}`}</td>
//                               <td>{`${x.caballeriza}`}</td>
//                               <td>{`${x.victorias}`}</td>
//                               <td>{`${x.fecha_ingreso}`}</td>
//                               <td>{`${x.stud}`}</td>
//                             </tr>
//                           )}
//                         ></Tabla>
//                       </Col>

//                       <Col className="col-3 ms-5">
//                         <Row>
//                           <h4>Filtrar por:</h4>
//                         </Row>
//                         <Row className="row-cols-2">
//                           <Col className="col-auto">
//                             <h5>Nombre</h5>
//                           </Col>

//                           <Col>
//                             <input
//                               placeholder="Buscar"
//                               style={{ width: "160px" }}
//                             ></input>
//                           </Col>
//                         </Row>

//                         <Row className="mt-3 ms-0">
//                           <select style={{ height: "30px" }}>
//                             <option>Stud</option>
//                             <option>Nro. Victorias</option>
//                           </select>
//                         </Row>

//                         <Row className="mt-3">
//                           <Col className="d-flex justify-content-center">
//                             <Button className="col-5">BUSCAR</Button>
//                           </Col>
//                         </Row>

//                         <Row className="mt-3 text-center">
//                           <p className="fw-bold">
//                             Los cambios de puesto o de caballeriza son decision
//                             de los entrenadores o del Stud
//                           </p>
//                         </Row>
//                       </Col>
//                     </Row>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </Row>

//           <Row>
//             <Col className="d-flex justify-content-center">
//               <Button className="mt-3">CAMBIAR ENTRENADOR DE STUD</Button>
//             </Col>
//           </Row>

//           <Row className="d-flex">
//             <Col className="d-flex justify-content-end">
//               <Row className="row row-cols-1">
//                 <Col className="d-flex justify-content-end">
//                   <Row
//                     lassName="d-flex align-items-end"
//                     style={{ height: "26px" }}
//                   >
//                     <p className="d-flex align-self-end">
//                       No esta registrado el entrenador?
//                     </p>
//                   </Row>
//                 </Col>

//                 <Col className="d-flex justify-content-end">
//                   <Button size="sm">Agregar Nuevo Entrenador</Button>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>

//       <Card className="mt-4 mx-5 mb-4 px-2">
//         <Card.Body>
//           <Row>
//             <Col className="col-auto">
//               <Row>
//                 <h3>Fecha de cambio</h3>
//               </Row>

//               <Row className="ms-0">
//                 <input type="date"></input>
//               </Row>
//             </Col>
//           </Row>

//           <Row className="mt-2">
//             <Row>
//               <Col className="ms-4">
//                 <h3>Buscar Propietario a cambiar</h3>
//               </Col>
//             </Row>

//             <Row>
//               <Col>
//                 <Card className="ms-4">
//                   <Card.Body>
//                     <Row className="row-cols-2">
//                       <Col className="col-8">
//                         <Tabla
//                           columnas={columnas3}
//                           informacion={propietarios}
//                           funcion={(x) => (
//                             <tr>
//                               <td>{`${x.nombre}`}</td>
//                               <td>{`${x.apellido}`}</td>
//                               <td>{`${x.porcentaje}`}</td>
//                               <td>{`${x.cedula}`}</td>
//                               <td>{`${x.stud}`}</td>
//                             </tr>
//                           )}
//                         ></Tabla>
//                       </Col>

//                       <Col className="col-3 ms-5">
//                         <Row>
//                           <h4>Filtrar por:</h4>
//                         </Row>
//                         <Row className="row-cols-2">
//                           <Col className="col-auto">
//                             <h5>Nombre</h5>
//                           </Col>

//                           <Col>
//                             <input
//                               placeholder="Buscar"
//                               style={{ width: "160px" }}
//                             ></input>
//                           </Col>
//                         </Row>

//                         <Row className="mt-3 ms-0">
//                           <select style={{ height: "30px" }}>
//                             <option>Stud</option>
//                             <option>Porcentaje</option>
//                           </select>
//                         </Row>

//                         <Row className="mt-3">
//                           <Col className="d-flex justify-content-center">
//                             <Button className="col-5">BUSCAR</Button>
//                           </Col>
//                         </Row>

//                         <Row className="mt-3 text-center">
//                           <p className="fw-bold">
//                             Los cambios de puesto o de caballeriza son decision
//                             de los entrenadores o del Stud
//                           </p>
//                         </Row>
//                       </Col>
//                     </Row>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </Row>

//           <Row>
//             <Col className="d-flex justify-content-center">
//               <Button className="mt-3">CAMBIAR PROPIETARIO DE STUD</Button>
//             </Col>
//           </Row>

//           <Row className="d-flex">
//             <Col className="d-flex justify-content-end">
//               <Row className="row row-cols-1">
//                 <Col className="d-flex justify-content-end">
//                   <Row
//                     lassName="d-flex align-items-end"
//                     style={{ height: "26px" }}
//                   >
//                     <p className="d-flex align-self-end">
//                       No esta registrado el propietario?
//                     </p>
//                   </Row>
//                 </Col>

//                 <Col className="d-flex justify-content-end">
//                   <Button size="sm">Agregar Nuevo Propietario</Button>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default StudUpdate;
