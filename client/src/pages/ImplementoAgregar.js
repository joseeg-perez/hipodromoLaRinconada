import React, { useState } from "react";
import { Button, Card, Container, Form, FormLabel } from "react-bootstrap";
import axios from "axios";

const ImplementoAgregar = () => {
  const [nombreImplemento, setNombreImplemento] = useState("");
  const [descripcionImplemento, setDescImplemento] = useState("");

  const handleNombreImplemento = (event) => {
    setNombreImplemento(event.target.value);
  };
  const handleDescImplemento = (event) => {
    setDescImplemento(event.target.value);
  };
  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/implementos/registrar_implemento",
        {
          nombreImplemento,
          descripcionImplemento,
        }
      );
    } catch (error) {
      throw error;
    }
    console.warn(nombreImplemento, descripcionImplemento);
    setNombreImplemento("");
    setDescImplemento("");
  };
  return (
    <Container>
      <div className="mt-3">
        <h2 className="mx-5">Agregar Implemento</h2>
        <Card className="mx-5">
          <Card.Body>
            <Form>
              <FormLabel className="fw-bold">Nombre del Implemento</FormLabel>
              <div>
                <input
                  value={nombreImplemento}
                  type="text"
                  className="form-control bg-transparent"
                  placeholder="Implemento"
                  onChange={handleNombreImplemento}
                />
              </div>
              <div className="mt-3">
                <FormLabel>Descripcion</FormLabel>
                <textarea
                  value={descripcionImplemento}
                  className="form-control"
                  rows="4"
                  onChange={handleDescImplemento}
                ></textarea>
              </div>
            </Form>
            <Button
              className="mt-3 float-end"
              size="lg"
              type="submit"
              onClick={handleData}
            >
              Crear Implemento
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default ImplementoAgregar;
