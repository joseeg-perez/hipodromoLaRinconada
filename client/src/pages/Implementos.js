import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import lupa from "../assets/lupa.svg";
import InfoImplemento from "../componentes/implementos/InfoImplemento";

const Implementos = () => {
  const [implementos, setImplementos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/implementos/listado_de_implementos")
      .then((res) => {
        // console.log(res);
        setImplementos(res.data);
        setLoading(false);
      });
    //   .catch((err) => console.log(err));
  }, []);

  console.log(implementos);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Container>
      <h2 className="text-center mt-3">LISTADO DE IMPLEMENTOS</h2>

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
          <Link size="sm" to={`/implementos/agregar`} className="text-center">
            <Button
              className="btn fw-bold"
              size="sm"
              style={{
                backgroundColor: "#E8EEDF",
                color: "black",
                border: "black",
              }}
            >
              AGREGAR IMPLEMENTO
            </Button>
          </Link>
        </div>
      </Row>
      <Row className="row-cols-4">
        {implementos.data.map((implemento) => (
          <InfoImplemento
            key={implemento.codigo_implemento}
            Id={implemento.codigo_implemento}
            nombre={implemento.nombre_implemento}
            descripcion={implemento.descripcion_implemento}
            abrev={implemento.abrev_implemento}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Implementos;
