import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lupa from "../assets/lupa.svg";
import InfoVeterinarios from "../componentes/veterinarios/InfoVeterinarios";
import axios from "axios";

const Veterinarios = () => {
  const [isLoading, setLoading] = useState(true);
  const [veterinarios, setVeterinarios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/veterinarios/listado_de_veterinarios")
      .then((res) => {
        console.log(res);
        setVeterinarios(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(veterinarios);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Container>
      <Row className="text-center">
        <h1>LISTADO DE VETERINARIOS</h1>
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
            to={`/veterinarios/createVeterinario`}
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
              AGREGAR VETERINARIO
            </Button>
          </Link>
        </div>
      </Row>

      <Row className="row-cols-2 mx-5">
        {veterinarios.data.map((veterinario) => (
          <InfoVeterinarios
            Id={veterinario.codigo_persona}
            key={veterinario.codigo_persona}
            nombre={veterinario.nombre1_persona}
            apellido={veterinario.apellido1_persona}
            caballeriza={veterinario.codigo_caballeriza}
            puestos={veterinario.cantidad_puestos}
            fecha={veterinario.fecha_inicio}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Veterinarios;
