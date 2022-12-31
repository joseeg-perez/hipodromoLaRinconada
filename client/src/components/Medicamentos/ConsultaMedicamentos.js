import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { CardMedImpRetiro } from "../CardMedImpRetiro";

export const ConsultaMedicamentos = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/medicamentos/listado_de_medicamentos")
      .then((res) => {
        // console.log(res);
        setMedicamentos(res.data);
        setLoading(false);
      });
    //   .catch((err) => console.log(err));
  }, []);

  console.log(medicamentos);
  if (isLoading) {
    return <div></div>;
  }
  return (
    <Container>
      <h2 className="text-center mt-3">Medicamentos</h2>
      <Row className="row-cols-4">
        {medicamentos.data.map((medicamento) => (
          <CardMedImpRetiro
            key={medicamento.codigo_medicamento}
            nombre={medicamento.nombre_medicamento}
            descripcion={medicamento.descripcion_medicamento}
          />
        ))}
      </Row>
    </Container>
  );
};
