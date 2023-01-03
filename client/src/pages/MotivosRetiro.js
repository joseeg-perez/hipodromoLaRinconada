import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import axios from "axios";
import { CardMedImpRetiro } from "../componentes/Medicamentos,Implementos,Retiros/CardMedImpRetiro";
import { Link } from "react-router-dom";
import lupa from "../assets/lupa.svg";

const MotivosRetiro = () => {
  const [retiros, setRetiros] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/motivos/listado_de_motivos")
      .then((res) => {
        console.log(res);
        setRetiros(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(retiros);
  if (isLoading) {
    return <div></div>;
  }
  return (
    <Container>
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
          style={{ backgroundColor: "#AFBBF7", width: "220px", height: "40px" }}
        >
          <Link size="sm" to={`/motivosRet/agregar`} className="text-center">
            <Button
              className="btn fw-bold"
              size="sm"
              style={{
                backgroundColor: "#E8EEDF",
                color: "black",
                border: "black",
              }}
            >
              AGREGAR MOTIVO
            </Button>
          </Link>
        </div>
      </Row>

      <h2 className="text-center mt-3">LISTADO DE MOTIVOS DE RETIRO</h2>
      <Row className="row-cols-4">
        {retiros.data.map((motivo) => (
          <CardMedImpRetiro
            key={motivo.codigo_motivo}
            nombre={motivo.nombre_motivo}
            descripcion={motivo.descripcion_motivo}
          />
        ))}
      </Row>
    </Container>
  );
};

export default MotivosRetiro;
