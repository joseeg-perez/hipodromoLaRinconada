import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tabla from "../componentes/tablas/Tabla";
import axios from "axios";

const Apuestas = () => {
  const [TiposDeApuesta, setTiposDeApuesta] = useState();
  const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/v1/apuestas/listado_de_tipoApuestas")
  //     .then((res) => {
  //       console.log(res);
  //       setTiposDeApuesta(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  if (isLoading) <div></div>;
  return (
    <Container>
      {/* <Tabla
        titulo="TIPOS DE APUESTA"
        columnas={
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        }
        informacion={TiposDeApuesta}
        estilo=" table-hover"
        funcion={(x) => (
          <tr>
            <td>{`${x.nombre}`}</td>
            <td>{`${x.descripcion}`}</td>
          </tr>
        )}
      ></Tabla> */}
      <Link size="sm" to={`/apuestas/apuestasCreate`} className="text-center">
        <Button className="btn btn-light btn-outline-success btn-sm mx-1">
          Agregar tipo de apuesta
        </Button>
      </Link>
      <Link size="sm" to={`/apuestas/hacerApuesta`} className="text-center">
        <Button className="btn btn-light btn-outline-success btn-sm mx-1">
          Realizar Apuesta
        </Button>
      </Link>
    </Container>
  );
};

export default Apuestas;
