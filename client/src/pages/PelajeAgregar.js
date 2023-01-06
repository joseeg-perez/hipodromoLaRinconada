import React, { useState } from "react";
import { Button, Card, Container, Form, FormLabel } from "react-bootstrap";
import axios from "axios";

const PelajeAgregar = () => {
  const [nombrePelaje, setNombrePelaje] = useState("");
  const [abrevPelaje, setAbrevPelaje] = useState("");
  const handleNombrePelaje = (event) => {
    setNombrePelaje(event.target.value);
  };
  const handleAbrevPelaje = (event) => {
    setAbrevPelaje(event.target.value);
  };
  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/pelajes/registrar_pelaje",
        {
          nombrePelaje,
          abrevPelaje,
        }
      );
    } catch (error) {
      throw error;
    }
    console.warn(nombrePelaje, abrevPelaje);
    setNombrePelaje("");
    setAbrevPelaje("");
  };
  return (
    <Container>
      <div className="mt-3">
        <h2 className="mx-5">Agregar Pelaje</h2>
        <Card className="mx-5">
          <Card.Body>
            <Form>
              <FormLabel className="fw-bold">Nombre del Pelaje</FormLabel>
              <div>
                <input
                  value={nombrePelaje}
                  type="text"
                  className="form-control bg-transparent"
                  placeholder="Pelaje"
                  onChange={handleNombrePelaje}
                />
              </div>
              <div className="mt-3">
                <FormLabel>Abreviatura del Pelaje</FormLabel>
                <div>
                  <input
                    type="text"
                    className="form-control bg-transparent"
                    value={abrevPelaje}
                    maxLength={3}
                    onChange={handleAbrevPelaje}
                  ></input>
                </div>
              </div>
            </Form>
            <Button
              className="mt-3 float-end"
              size="lg"
              type="submit"
              onClick={handleData}
            >
              Agregar Pelaje
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default PelajeAgregar;
