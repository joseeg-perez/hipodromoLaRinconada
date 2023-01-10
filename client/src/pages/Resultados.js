import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import InfoEventos from "../componentes/eventos/InfoEventos";
import Tabla from "../componentes/tablas/Tabla";

const Resultados = () => {
  let columnas1 = (
    <tr>
      <th>Jinetes</th>
      <th>T.A</th>
      <th>1ro</th>
      <th>2do</th>
      <th>3ro</th>
      <th>%Vic</th>
    </tr>
  );

  let columnas2 = (
    <tr>
      <th>Studs</th>
      <th>T.A</th>
      <th>1ro</th>
      <th>2do</th>
      <th>3ro</th>
      <th>%Vic</th>
    </tr>
  );

  let columnas3 = (
    <tr>
      <th>Entrenadores</th>
      <th>T.A</th>
      <th>1ro</th>
      <th>2do</th>
      <th>3ro</th>
      <th>%Vic</th>
    </tr>
  );

  let columnas4 = (
    <tr>
      <th>Yeguas</th>
      <th>T.A</th>
      <th>1ro</th>
      <th>2do</th>
      <th>3ro</th>
      <th>%Vic</th>
    </tr>
  );

  let columnas5 = (
    <tr>
      <th>Caballos</th>
      <th>T.A</th>
      <th>1ro</th>
      <th>2do</th>
      <th>3ro</th>
      <th>%Vic</th>
    </tr>
  );

  let columnas6 = (
    <tr>
      <th>Pos</th>
      <th>Nombre</th>
      <th>Num</th>
      <th>Jinete</th>
      <th>Stud</th>
      <th>Tiempo</th>
    </tr>
  );

  const resultados = [
    {
      id: "1",
      nombre: "Carrera 1",
      posiciones: [
        {
          pos: 1,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "15:30",
        },
        {
          pos: 2,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 3,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 4,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 5,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 6,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 7,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 8,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 9,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 10,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 11,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 12,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 13,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 14,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
      ],
    },
    {
      id: "2",
      nombre: "Carrera 2",
      posiciones: [
        {
          pos: 1,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "15:30",
        },
        {
          pos: 2,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 3,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 4,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 5,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 6,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 7,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 8,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 9,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 10,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 11,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 12,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 13,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 14,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
      ],
    },
    {
      id: "3",
      nombre: "Carrera 3",
      posiciones: [
        {
          pos: 1,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "15:30",
        },
        {
          pos: 2,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 3,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 4,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 5,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 6,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 7,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 8,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 9,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 10,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 11,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 12,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 13,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 14,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
      ],
    },
    {
      id: "4",
      nombre: "Carrera 4",
      posiciones: [
        {
          pos: 1,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "15:30",
        },
        {
          pos: 2,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 3,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 4,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 5,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 6,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 7,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 8,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 9,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 10,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 11,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 12,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 13,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 14,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
      ],
    },
    {
      id: "5",
      nombre: "Carrera 5",
      posiciones: [
        {
          pos: 1,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "15:30",
        },
        {
          pos: 2,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 3,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 4,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 5,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 6,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 7,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 8,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 9,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 10,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
      ],
    },
    {
      id: "6",
      nombre: "Carrera 6",
      posiciones: [
        {
          pos: 1,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "15:30",
        },
        {
          pos: 2,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 3,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 4,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 5,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 6,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 7,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 8,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 9,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 10,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 11,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
        {
          pos: 12,
          nombre: "Wixy",
          num: 44,
          jinete: "Pedro Navaja",
          stud: "Papa Pedro",
          tiempo: "+1.4 seg",
        },
      ],
    },
  ];

  const jinetes = [
    {
      id: "1",
      nombre: "Cipriano Gil",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "2",
      nombre: "Cipriano Gil",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "3",
      nombre: "Cipriano Gil",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "4",
      nombre: "Cipriano Gil",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "5",
      nombre: "Cipriano Gil",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "6",
      nombre: "Cipriano Gil",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
  ];

  const studs = [
    {
      id: "1",
      nombre: "Los Gochos",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "2",
      nombre: "Los Gochos",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "3",
      nombre: "Los Gochos",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "4",
      nombre: "Los Gochos",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "5",
      nombre: "Los Gochos",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "6",
      nombre: "Los Gochos",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
  ];

  const entrenadores = [
    {
      id: "1",
      nombre: "Javier Molina",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "2",
      nombre: "Javier Molina",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "3",
      nombre: "Javier Molina",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "4",
      nombre: "Javier Molina",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "5",
      nombre: "Javier Molina",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "6",
      nombre: "Javier Molina",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
  ];

  const caballos = [
    {
      id: "1",
      nombre: "LA FURIA NEGRA",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "2",
      nombre: "LA FURIA NEGRA",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "3",
      nombre: "LA FURIA NEGRA",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "4",
      nombre: "LA FURIA NEGRA",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "5",
      nombre: "LA FURIA NEGRA",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "6",
      nombre: "LA FURIA NEGRA",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
  ];

  const yeguas = [
    {
      id: "1",
      nombre: "Princesa",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "2",
      nombre: "Princesa",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "3",
      nombre: "Princesa",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "4",
      nombre: "Princesa",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "5",
      nombre: "Princesa",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
    {
      id: "6",
      nombre: "Princesa",
      ta: 19,
      pri: 4,
      seg: 6,
      ter: 5,
      vic: "21%",
    },
  ];

  const eventos=[
    {
      id:"1",
      fecha: "09/10/2022",
    },
    {
      id:"2",
      fecha: "09/10/2022",
    },
    {
      id:"3",
      fecha: "09/10/2022",
    },
    {
      id:"4",
      fecha: "09/10/2022",
    },
    {
      id:"5",
      fecha: "09/10/2022",
    },
    {
      id:"6",
      fecha: "09/10/2022",
    },
    {
      id:"7",
      fecha: "09/10/2022",
    },
    {
      id:"8",
      fecha: "09/10/2022",
    },
    {
      id:"9",
      fecha: "09/10/2022",
    },
  ]

  const eventos2=[
    {
      id:"1",
      fecha: "09/10/2022",
    },
    {
      id:"2",
      fecha: "10/10/2022",
    },
  ]
  return (
    <Container>
      <Row className="text-center">
        <h1>RESULTADOS</h1>
      </Row>

      <Row className="mt-3">
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body style={{ height: "1479px", overflowY: "scroll" }}>
              <Row>
                <Card>
                  <Card.Body>
                    <Row className="text-center">
                      <h3>CLASIFICACION GENERAL</h3>
                    </Row>

                    <Row>
                      <Col className="col-5 ms-5">
                        <Tabla
                          titulo="JINETES"
                          columnas={columnas1}
                          informacion={jinetes}
                          funcion={(x) => (
                            <tr>
                              <td>{`${x.nombre}`}</td>
                              <td>{`${x.ta}`}</td>
                              <td>{`${x.pri}`}</td>
                              <td>{`${x.seg}`}</td>
                              <td>{`${x.ter}`}</td>
                              <td>{`${x.vic}`}</td>
                            </tr>
                          )}
                        ></Tabla>
                      </Col>

                      <Col className="col-5 offset-1">
                        <Tabla
                          titulo="STUDS"
                          columnas={columnas2}
                          informacion={studs}
                          funcion={(x) => (
                            <tr>
                              <td>{`${x.nombre}`}</td>
                              <td>{`${x.ta}`}</td>
                              <td>{`${x.pri}`}</td>
                              <td>{`${x.seg}`}</td>
                              <td>{`${x.ter}`}</td>
                              <td>{`${x.vic}`}</td>
                            </tr>
                          )}
                        ></Tabla>
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col className="col-5 ms-5">
                        <Tabla
                          titulo="ENTRENADORES"
                          columnas={columnas3}
                          informacion={entrenadores}
                          funcion={(x) => (
                            <tr>
                              <td>{`${x.nombre}`}</td>
                              <td>{`${x.ta}`}</td>
                              <td>{`${x.pri}`}</td>
                              <td>{`${x.seg}`}</td>
                              <td>{`${x.ter}`}</td>
                              <td>{`${x.vic}`}</td>
                            </tr>
                          )}
                        ></Tabla>
                      </Col>

                      <Col className="col-5 offset-1">
                        <Tabla
                          titulo="YEGUAS"
                          columnas={columnas4}
                          informacion={yeguas}
                          funcion={(x) => (
                            <tr>
                              <td>{`${x.nombre}`}</td>
                              <td>{`${x.ta}`}</td>
                              <td>{`${x.pri}`}</td>
                              <td>{`${x.seg}`}</td>
                              <td>{`${x.ter}`}</td>
                              <td>{`${x.vic}`}</td>
                            </tr>
                          )}
                        ></Tabla>
                      </Col>
                    </Row>

                    <Row className="mt-3 d-flex justify-content-center">
                      <Col className="col-5">
                        <Tabla
                          titulo="CABALLOS"
                          columnas={columnas5}
                          informacion={caballos}
                          funcion={(x) => (
                            <tr>
                              <td>{`${x.nombre}`}</td>
                              <td>{`${x.ta}`}</td>
                              <td>{`${x.pri}`}</td>
                              <td>{`${x.seg}`}</td>
                              <td>{`${x.ter}`}</td>
                              <td>{`${x.vic}`}</td>
                            </tr>
                          )}
                        ></Tabla>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Row>

              <Row className="mt-3">
                <Row className="text-center">
                  <h3>RESULTADOS ULTIMO EVENTO</h3>
                </Row>

                <Row className="row row-cols-2">
                  {resultados.map((x) => (
                    <Tabla
                      titulo={x.nombre}
                      columnas={columnas6}
                      informacion={x.posiciones}
                      funcion={(x) => (
                        <tr>
                          <td>{`${x.pos}`}</td>
                          <td>{`${x.nombre}`}</td>
                          <td>{`${x.num}`}</td>
                          <td>{`${x.jinete}`}</td>
                          <td>{`${x.stud}`}</td>
                          <td>{`${x.tiempo}`}</td>
                        </tr>
                      )}
                    ></Tabla>
                  ))}
                </Row>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3 mb-2">
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body style={{ height: "478px", overflowY: "scroll" }}>
              <Row className="text-center">
                <h3>EVENTOS ANTERIORES</h3>
              </Row>

              <Row className="d-flex justify-content-center row-cols-2 mt-2">
                <Col className="col-auto">
                  <h5>Buscar Evento</h5>
                </Col>
                <Col className="col-auto">
                  <input type="date"></input>
                </Col>
                
                <Col className="col-auto">
                  <Button className="d-flex align-items-center" style={{height: "28px"}}>Buscar</Button>
                </Col>
              </Row>

              <Row className="row row-cols-3 mt-3 text-center d-flex justify-content-center">
                {eventos.map((x)=><InfoEventos key={x.id} id={x.id} fecha={x.fecha} tipo="resultados"></InfoEventos>)}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3 mb-2">
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body>
              <Row className="text-center">
                <h3>AGREGAR RESULTADOS</h3>
              </Row>

              <Row className="d-flex justify-content-center row-cols-2 mt-2">
                <Col className="col-auto">
                  <h5>Buscar Evento</h5>
                </Col>
                <Col className="col-auto">
                  <input type="date"></input>
                </Col>
                
                <Col className="col-auto">
                  <Button className="d-flex align-items-center" style={{height: "28px"}}>Buscar</Button>
                </Col>
              </Row>

              <Row className="row row-cols-3 mt-3 text-center d-flex justify-content-center">
                {eventos2.map((x)=><InfoEventos key={x.id} id={x.id} fecha={x.fecha} tipo="carrerasRegistradas" tipo2="agregarResultados"></InfoEventos>)}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Resultados;
