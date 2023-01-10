import React, { useState } from "react";
import { Container, Card, Form, FormLabel, Button } from "react-bootstrap";
import axios from "axios";

const MotivoRetiroAgregar = () => {
  const [nombreMotivo, setNombreMotivo] = useState("");
  const [descripcionMotivo, setDescMotivo] = useState("");
  const handleNombreMotivo = (event) => {
    setNombreMotivo(event.target.value);
  };
  const handleDescMotivo = (event) => {
    setDescMotivo(event.target.value);
  };
  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/motivos/registrar_motivo",
        {
          nombreMotivo,
          descripcionMotivo,
        }
      );
    } catch (error) {
      throw error;
    }
    console.warn(nombreMotivo, descripcionMotivo);
    setNombreMotivo("");
    setDescMotivo("");
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
                  value={nombreMotivo}
                  type="text"
                  className="form-control bg-transparent"
                  placeholder="Motivo"
                  onChange={handleNombreMotivo}
                />
              </div>
              <div className="mt-3">
                <FormLabel>Descripcion</FormLabel>
                <textarea
                  value={descripcionMotivo}
                  className="form-control"
                  rows="4"
                  onChange={handleDescMotivo}
                ></textarea>
              </div>
            </Form>
            <Button
              className="mt-3 float-end"
              size="lg"
              type="submit"
              onClick={handleData}
            >
              Crear Motivo
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default MotivoRetiroAgregar;
