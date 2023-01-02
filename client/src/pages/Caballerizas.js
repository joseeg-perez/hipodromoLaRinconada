import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import lupa from "../assets/lupa.svg";
import InfoCaballeriza from "../componentes/caballerizas/InfoCaballeriza";

const Caballerizas = () => {
  const caballerizas = [
    {
      id: "1",
      numero: 1,
      total: 50,
      disponible: 26,
      entrenador: "Jose Perez",
      veterinario: "Jose Gregorio",
    },
    {
      id: "2",
      numero: 2,
      total: 50,
      disponible: 26,
      entrenador: "Jose Perez Blanco Magallanes",
      veterinario: "Jose Gregorio",
    },
    {
      id: "3",
      numero: 3,
      total: 50,
      disponible: 26,
      entrenador: "Jose Perez",
      veterinario: "Jose Gregorio",
    },
    {
      id: "4",
      numero: 4,
      total: 50,
      disponible: 26,
      entrenador: "Jose Perez",
      veterinario: "Jose Gregorio",
    },
    {
      id: "5",
      numero: 5,
      total: 50,
      disponible: 26,
      entrenador: "Jose Perez",
      veterinario: "Jose Gregorio",
    },
    {
      id: "6",
      numero: 6,
      total: "Record: 20-15",
      disponible: 26,
      entrenador: "Jose Perez",
      veterinario: "Jose Gregorio",
    },
  ];
  return (
    <Container>
      <Row className="text-center">
        <h1>CABALLERIZAS</h1>
      </Row>

      <Row className="row justify-content-center mb-4">
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
          style={{ backgroundColor: "#AFBBF7", width: "231px", height: "40px" }}
        >
          <Link
            className="btn fw-bold"
            size="sm"
            style={{
              backgroundColor: "#E8EEDF",
              color: "black",
              border: "black",
            }}
            to={{pathname: "/caballeriza/agregar"}}
          >
            AGREGAR CABALLERIZA
          </Link>
        </div>
      </Row>

      <Row className="row row-cols-3">
        {caballerizas.map((x) => (
          <InfoCaballeriza
            key={x.id}
            id={x.id}
            numero={x.numero}
            total={x.total}
            disponible={x.disponible}
            entrenador={x.entrenador}
            veterinario={x.veterinario}
          ></InfoCaballeriza>
        ))}
      </Row>
    </Container>
  );
};

export default Caballerizas;
