import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tabla from "../componentes/tablas/Tabla";
import axios from "axios";
import edit from "../assets/editicon.png";
import trash from "../assets/trashicon.png";

const Apuestas = () => {
  const [TiposDeApuesta, setTiposDeApuesta] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/tipo_apuestas/listado_de_tipoApuestas")
      .then((res) => {
        console.log(res.data.data);
        setTiposDeApuesta(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id, event) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/api/v1/tipo_apuestas/${id}`)
      .then((res) => {
        if (res.data != null) {
          alert("Se eliminó el tipo de apuesta con éxito");
        }
      })
      .catch((err) => console.log(err));
  };

  if (isLoading) return <div></div>;
  return (
    <Container className="mb-3">
      <h3 className="text-center">Tipos de Apuesta</h3>
      <Table>
        <thead className="text-center">
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {TiposDeApuesta.map((tipo) => (
            <tr>
              <td>{tipo.nombre_apuesta}</td>
              <td>{tipo.descripcion_apuesta}</td>
              <td>
                <Link
                  size="sm"
                  to={`/tipo_apuestas/${tipo.codigo_apuesta}/updateTipoApuesta`}
                  className="text-center"
                >
                  <Button className="btn btn-light btn-outline-success btn-sm mx-1">
                    <img src={edit} alt="/" width={20} />
                  </Button>
                </Link>
              </td>
              <td>
                {" "}
                <Button
                  className="btn btn-light btn-outline-danger btn-sm mx-1"
                  onClick={(e) => handleDelete(tipo.codigo_apuesta, e)}
                >
                  <img src={trash} alt="/" width={20} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
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
