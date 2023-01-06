import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import TablaCard from "../componentes/layout/TablaCard";

const RetirarEjemplar = () => {
  const location = useLocation();
  const {
    props: { id },
  } = location.state;
  console.log(id);

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
      descripcion: "Le duelen la patas"
    },
    {
      id: "2",
      nombre: "Gaytitis",
      descripcion: "Le duelen la patas"
    },
    {
      id: "3",
      nombre: "Gaytitis",
      descripcion: "Le duelen la patas"
    },
    {
      id: "4",
      nombre: "Gaytitis",
      descripcion: "Le duelen la patas"
    },
  ];

  const onSeleccionEjemplarHandler = (id, event) => {
    event.preventDefault();
    console.log(id);
  };

  const onSeleccionMotivoHandler = (id, event) => {
    event.preventDefault();
    console.log(id);
  };
  return (
    <Container>
      <Row className="text-center">
        <h1>RETIRAR EJEMPLAR DE LA CARRERA</h1>
      </Row>

      <TablaCard
        titulo="SELECCIONAR EJEMPLAR"
        columnas={columnas}
        informacion={informacion}
        tituloTabla="Ejemplares"
        estilo=" table-hover"
        funcion={(x) => (
          <tr onClick={(e) => onSeleccionEjemplarHandler(x.id, e)}>
            <td>{`${x.pos}`}</td>
            <td>{`${x.nombre}`}</td>
            <td>{`${x.num}`}</td>
            <td>{`${x.jinete}`}</td>
            <td>{`${x.stud}`}</td>
          </tr>
        )}
      ></TablaCard>

      <TablaCard
        titulo="SELECCIONAR MOTIVO"
        columnas={columnas2}
        informacion={informacion2}
        tituloTabla="Motivos"
        estilo=" table-hover"
        funcion={(x) => (
          <tr onClick={(e) => onSeleccionMotivoHandler(x.id, e)}>
            <td>{`${x.nombre}`}</td>
            <td>{`${x.descripcion}`}</td>
          </tr>
        )}
      ></TablaCard>
    </Container>
  );
};

export default RetirarEjemplar;
