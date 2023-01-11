import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lupa from "../assets/lupa.svg";
import axios from "axios";
import InfoPropietario from "../componentes/propietarios/InfoPropietario";

const Propietarios = () => {
  const [isLoading, setLoading] = useState(true);
  const [propietarios, setPropietarios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/propietarios/listado_de_propietarios")
      .then((res) => {
        console.log(res);
        setPropietarios(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(propietarios);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Container>
      <Row className="text-center">
        <h1>LISTADO DE PROPIETARIOS</h1>
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
          style={{ backgroundColor: "#AFBBF7", width: "200px", height: "40px" }}
        >
          <Link
            size="sm"
            to={`/propietarios/createPropietario`}
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
              AGREGAR PROPIETARIO
            </Button>
          </Link>
        </div>
      </Row>

      <Row className="row-cols-2 mx-5">
        {propietarios.data.map((propietario) => (
          <InfoPropietario
            Id={propietario.codigo_persona}
            key={propietario.codigo_persona}
            nombre={propietario.nombre1_persona}
            apellido={propietario.apellido1_persona}
            telefono={propietario.telefono}
            lugar={propietario.nombre_lugar}
            correo={propietario.correo}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Propietarios;
