import React, { Fragment } from "react";
import {
  Container,
  Card,
  Form,
  FormLabel,
  Row,
  Col,
  Button,
  FormCheck,
  FormGroup,
  FormSelect,
  FormControl,
} from "react-bootstrap";
import TablaCard from "../componentes/layout/TablaCard";
import Contacto from "../componentes/principal/Contacto";
import Eventos from "../componentes/principal/Eventos";

const Principal = () => {
  let columnas = (
    <tr>
      <th>Pos</th>
      <th>Nombre</th>
      <th>Num</th>
      <th>Jinete</th>
      <th>Stud</th>
      <th>Tiempo</th>
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
      tiempo: "1:30:15",
    },
    {
      id: "2",
      pos: 1,
      nombre: "Reina",
      num: 44,
      jinete: "Victor Blanco",
      stud: "Papa Pedro",
      tiempo: "1:30:15",
    },
    {
      id: "3",
      pos: 1,
      nombre: "Reina",
      num: 44,
      jinete: "Victor Blanco",
      stud: "Papa Pedro",
      tiempo: "1:30:15",
    },
    {
      id: "4",
      pos: 1,
      nombre: "Reina",
      num: 44,
      jinete: "Victor Blanco",
      stud: "Papa Pedro",
      tiempo: "1:30:15",
    },
  ];

  
  return (
    <Fragment>
      <Eventos></Eventos>
      <TablaCard
        titulo='RESULTADOS DEL ULTIMO EVENTO'
        columnas={columnas}
        informacion={informacion}
        tituloTabla='1100 Mts'
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
      ></TablaCard>
      <Contacto></Contacto>
    </Fragment>
  );
};

export default Principal;
