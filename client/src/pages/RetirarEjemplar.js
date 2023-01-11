import React, { useState, useEffect } from "react";
import { Container, Row, Button, Col, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import TablaCard from "../componentes/layout/TablaCard";
import Tabla from "../componentes/tablas/Tabla";

import axios from "axios";

const RetirarEjemplar = () => {
  const location = useLocation();
  const {
    props: { id },
  } = location.state;
  console.log(id);
  const [isLoading, setLoading] = useState(true);
  const [motivos, setMotivos] = useState([]);
  const [ejemplarEscogido, setEjemplarEscogido] = useState("");
  const [motivoEscogido, setMotivoEscogido] = useState("");
  const [toggleEjemplar, setToggleEjemplar] = useState(false);
  const [toggleMotivo, setToggleMotivo] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/motivos/listado_de_motivos")
      .then((res) => {
        console.log(res);
        setMotivos(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (isLoading) return <div>Cargando</div>;
  console.log(motivos);

  let hoy = new Date();
  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1;
  let an = hoy.getFullYear();
  if (dia < 10) dia = `0${dia}`;
  if (mes < 10) mes = `0${mes}`;
  let fecha=`${an}-${mes}-${dia}`

  let columnas = (
    <tr>
      <th>Pos</th>
      <th>Nombre</th>
      <th>Num</th>
      <th>Jinete</th>
      <th>Stud</th>
    </tr>
  );

  let columnas2 = (
    <tr>
      <th>Nombre</th>
      <th>Descripcion</th>
    </tr>
  );

  const informacion = [
    {
      id: "1",
      pos: 1,
      nombre: "Reina",
      num: 44,
      jinete: "Victor Blanco",
      stud: "Papa Pedro",
    },
    {
      id: "2",
      pos: 1,
      nombre: "Reina",
      num: 44,
      jinete: "Victor Blanco",
      stud: "Papa Pedro",
    },
    {
      id: "3",
      pos: 1,
      nombre: "Reina",
      num: 44,
      jinete: "Victor Blanco",
      stud: "Papa Pedro",
    },
    {
      id: "4",
      pos: 1,
      nombre: "Reina",
      num: 44,
      jinete: "Victor Blanco",
      stud: "Papa Pedro",
    },
  ];

  const informacion2 = [
    {
      id: "1",
      nombre: "Gaytitis",
      descripcion: "Le duelen la patas",
    },
    {
      id: "2",
      nombre: "Gaytitis",
      descripcion: "Le duelen la patas",
    },
    {
      id: "3",
      nombre: "Gaytitis",
      descripcion: "Le duelen la patas",
    },
    {
      id: "4",
      nombre: "Gaytitis",
      descripcion: "Le duelen la patas",
    },
  ];

  const onSeleccionEjemplarHandler = (ejemplar, event) => {
    event.preventDefault();
    console.log(ejemplar.id);
    setEjemplarEscogido(ejemplar);
    setToggleEjemplar(true);
  };

  const onSeleccionMotivoHandler = (motivo, event) => {
    event.preventDefault();
    console.log(motivo.codigo_motivo);
    setMotivoEscogido(motivo);
    setToggleMotivo(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(motivoEscogido.codigo_motivo);
    console.log(ejemplarEscogido.id);
    console.log(fecha);
  };
  return (
    <Container>
      <Row className="text-center">
        <h1>RETIRAR EJEMPLAR DE LA CARRERA</h1>
      </Row>

      <Row>
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body>
              <Row>
                <Tabla
                  titulo="SELECCIONAR EJEMPLAR"
                  columnas={columnas}
                  informacion={informacion}
                  tituloTabla="Ejemplares"
                  estilo=" table-hover"
                  funcion={(x) => (
                    <tr onClick={(e) => onSeleccionEjemplarHandler(x, e)}>
                      <td>{`${x.pos}`}</td>
                      <td>{`${x.nombre}`}</td>
                      <td>{`${x.num}`}</td>
                      <td>{`${x.jinete}`}</td>
                      <td>{`${x.stud}`}</td>
                    </tr>
                  )}
                ></Tabla>
              </Row>
              {toggleEjemplar && (
                <Row className="text-center">
                  <h5 className="fw-bold">
                    Ejemplar escogido para retirar es: {ejemplarEscogido.nombre}
                  </h5>
                </Row>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body>
              <Row>
                <Tabla
                  titulo="SELECCIONAR MOTIVO"
                  columnas={columnas2}
                  informacion={motivos.data}
                  tituloTabla="Motivos"
                  estilo=" table-hover"
                  funcion={(x) => (
                    <tr onClick={(e) => onSeleccionMotivoHandler(x, e)}>
                      <td>{`${x.nombre_motivo}`}</td>
                      <td>{`${x.descripcion_motivo}`}</td>
                    </tr>
                  )}
                ></Tabla>
              </Row>

              {toggleMotivo && (
                <Row className="text-center">
                  <h5 className="fw-bold">
                    Motivo del retiro es: {motivoEscogido.nombre_motivo}
                  </h5>
                </Row>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3 d-flex justify-content-center">
        <Col className="col-auto d-flex justify-content-center">
          <Button onClick={formSubmissionHandler} size="xl">
            GUARDAR
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default RetirarEjemplar;
