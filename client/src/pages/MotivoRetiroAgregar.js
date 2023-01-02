import React, { useState } from "react";
import { Container, Card, Form, FormLabel, Button } from "react-bootstrap";
import axios from "axios";

const MotivoRetiroAgregar = () => {
  const [NombreMotivoRetiro, setNombreMotivoRetiro] = useState("");
  const [DescMotivoRetiro, setDescMotivoRetiro] = useState("");
  const handleNombreMotivoRetiro = (event) => {
    setNombreMotivoRetiro(event.target.value);
  };
  const handleDescMotivoRetiro = (event) => {
    setDescMotivoRetiro(event.target.value);
  };
  const handleData = async (event) => {
    event.preventDefault();
    // try {
    //   await axios.post(
    //     "http://localhost:5000/api/v1/retiros/registrar_retiro",
    //     {
    //       nombreMedicamento,
    //       descripcionMedicamento,
    //     }
    //   );
    // } catch (error) {
    //   throw error;
    // }
    console.warn(NombreMotivoRetiro, DescMotivoRetiro);
    setNombreMotivoRetiro("");
    setDescMotivoRetiro("");
  };

  return (
    <Container>
      <div className="mt-3">
        <h2 className="mx-5">Agregar Motivo Retiro</h2>
        <Card className="mx-5">
          <Card.Body>
            <Form>
              <FormLabel className="fw-bold">
                Nombre del Motivo Retiro
              </FormLabel>
              <div>
                <input
                  value={NombreMotivoRetiro}
                  type="text"
                  className="form-control bg-transparent"
                  placeholder="MotivoRetiro"
                  onChange={handleNombreMotivoRetiro}
                />
              </div>
              <div className="mt-3">
                <FormLabel>Descripcion</FormLabel>
                <textarea
                  value={DescMotivoRetiro}
                  className="form-control"
                  rows="4"
                  onChange={handleDescMotivoRetiro}
                ></textarea>
              </div>
            </Form>
            <Button
              className="mt-3 float-end"
              size="lg"
              type="submit"
              onClick={handleData}
            >
              Crear MotivoRetiro
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default MotivoRetiroAgregar;
