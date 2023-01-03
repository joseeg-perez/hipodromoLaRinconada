import React, { useState } from "react";
import { Button, Card, Container, Form, FormLabel } from "react-bootstrap";
import axios from "axios";

const MedicamentoAgregar = () => {
  const [nombreMedicamento, setNombreMedicamento] = useState("");
  const [descripcionMedicamento, setDescMedicamento] = useState("");
  const handleNombreMedicamento = (event) => {
    setNombreMedicamento(event.target.value);
  };
  const handleDescMedicamento = (event) => {
    setDescMedicamento(event.target.value);
  };
  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/medicamentos/registrar_medicamento",
        {
          nombreMedicamento,
          descripcionMedicamento,
        }
      );
    } catch (error) {
      throw error;
    }
  };
  return (
    <Container>
      <div className="mt-3">
        <h2 className="mx-5">Agregar Medicamento</h2>
        <Card className="mx-5">
          <Card.Body>
            <Form>
              <FormLabel className="fw-bold">Nombre del Medicamento</FormLabel>
              <div>
                <input
                  value={nombreMedicamento}
                  type="text"
                  className="form-control bg-transparent"
                  placeholder="Medicamento"
                  onChange={handleNombreMedicamento}
                />
              </div>
              <div className="mt-3">
                <FormLabel>Descripcion</FormLabel>
                <textarea
                  value={descripcionMedicamento}
                  className="form-control"
                  rows="4"
                  onChange={handleDescMedicamento}
                ></textarea>
              </div>
            </Form>
            <Button
              className="mt-3 float-end"
              size="lg"
              type="submit"
              onClick={handleData}
            >
              Crear Medicamento
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default MedicamentoAgregar;
