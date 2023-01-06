import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import lupa from "../assets/lupa.svg";
import InfoCaballeriza from "../componentes/caballerizas/InfoCaballeriza";
import axios from "axios";

const Caballerizas = () => {
  const [isLoading, setLoading] = useState(true);
  const [caballerizas, setCaballerizas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/caballerizas/listado_de_caballerizas")
      .then((res) => {
        console.log(res);
        setCaballerizas(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(caballerizas);

  if (isLoading) {
    return <div></div>;
  }

  const caballerizast = [
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
            to={{ pathname: "/caballeriza/createCaballeriza" }}
          >
            AGREGAR CABALLERIZA
          </Link>
        </div>
      </Row>

      {/* select codigo_caballeriza, cantidad_puestos, 
concat(e.nombre1_persona, ' ', e.apellido1_persona) as nombreEntrenador,
concat(v.nombre1_persona, ' ', v.apellido1_persona) as nombreVeterinario
from caballeriza, persona_entrenador e, persona_veterinario v, entrenador_caballeriza ec, veterinario_caballeriza vc
where ec.fk_entrenador = e.codigo_persona
AND vc.fk_caballeriza = codigo_caballeriza
AND ec.fk_caballeriza = codigo_caballeriza
AND vc.fk_veterinario = v.codigo_persona
AND ec.fecha_fin is null
AND vc.fecha_fin is null
ORDER BY codigo_caballeriza*/}

      <Row className="row row-cols-3">
        {caballerizas.data.map((caballeriza) => (
          <InfoCaballeriza
            key={caballeriza.codigo_caballeriza}
            codigo={caballeriza.codigo_caballeriza}
            id={caballeriza.codigo_caballeriza}
            numero={caballeriza.codigo_caballeriza}
            total={caballeriza.cantidad_puestos}
            disponible={caballeriza.disponible}
            entrenador={caballeriza.nombreentrenador}
            veterinario={caballeriza.nombreveterinario}
          ></InfoCaballeriza>
        ))}
      </Row>
    </Container>
  );
};

export default Caballerizas;
