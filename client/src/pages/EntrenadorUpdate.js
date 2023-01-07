import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lupa from "../assets/lupa.svg";
import axios from "axios";
import InfoEntrenador from "../componentes/entrenadores/InfoEntrenador";

const EntrenadorUpdate = () => {
  const [isLoading, setLoading] = useState(true);
  const [entrenadores, setEntrenadores] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/entrenadores/listado_de_entrenadores")
      .then((res) => {
        console.log(res);
        setEntrenadores(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(entrenadores);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Container>
      <Row className="text-center">
        <h1>LISTADO DE ENTRENADORES</h1>
      </Row>

      <Row className="row justify-content-center">
        <div
          className="rounded-start d-flex align-items-center"
          style={{ backgroundColor: "#6376D4", width: "400px", height: "40px" }}
        >
          <input
            className="col-9"
            type="text"
            placeholder="Buscar"
            style={{
              backgroundImage: `url(${lupa})`,
              backgroundSize: "20px 20px",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "255px",
              backgroundPositionY: "2px",
              border: 0,
              borderRadius: "4px",
            }}
          ></input>

          <Button
            className="btn  ms-4 fw-bold"
            size="sm"
            style={{
              backgroundColor: "#E8EEDF",
              color: "black",
              border: "black",
            }}
          >
            BUSCAR
          </Button>
        </div>

        <div
          className="rounded-end d-flex align-items-center"
          style={{ backgroundColor: "#AFBBF7", width: "210px", height: "40px" }}
        >
          <Link
            size="sm"
            to={`/entrenadores/createEntrenador`}
            className="text-center"
          >
            <Button
              className="btn fw-bold"
              size="sm"
              style={{
                backgroundColor: "#E8EEDF",
                color: "black",
                border: "black",
              }}
            >
              AGREGAR ENTRENADOR
            </Button>
          </Link>
        </div>
      </Row>

      <Row className="row-cols-2 mx-5">
        {entrenadores.data.map((entrenador) => (
          <InfoEntrenador
            Id={entrenador.codigo_persona}
            key={entrenador.codigo_persona}
            nombre={entrenador.nombre1_persona}
            apellido={entrenador.apellido1_persona}
            caballeriza={entrenador.codigo_caballeriza}
            puestos={entrenador.cantidad_puestos}
            fecha={entrenador.fecha_inicio}
          />
        ))}
      </Row>
    </Container>
  );
};

export default EntrenadorUpdate;
