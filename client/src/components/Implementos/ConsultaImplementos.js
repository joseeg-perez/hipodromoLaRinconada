import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { CardMedImpRetiro } from "../CardMedImpRetiro";

export const ConsultaImplementos = () => {
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
      <h2 className="text-center mt-3">Implementos</h2>
      <Row className="row-cols-4">
        {implementos.data.map((implemento) => (
          <CardMedImpRetiro
            key={implemento.codigo_implemento}
            nombre={implemento.nombre_implemento}
            descripcion={implemento.descripcion_implemento}
          />
        ))}
      </Row>
    </Container>
  );
};
