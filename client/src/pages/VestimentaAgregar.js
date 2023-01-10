import React, { useState } from "react";
import { Container, Form, FormLabel, Card, Button } from "react-bootstrap";
import axios from "axios";

const VestimentaAgregar = () => {
  const [nombreVestimenta, setNombreVestimenta] = useState("");
  const handleNombreVestimenta = (event) => {
    setNombreVestimenta(event.target.value);
  };
  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/vestimentas/registrar_vestimenta",
        { nombreVestimenta }
      );
    } catch (error) {
      throw error;
    }
    console.warn(nombreVestimenta);
    setNombreVestimenta("");
  };

  return (
    <Container>
      <div className="mt-3">
        <h2 className="mx-5">Agregar Vestimenta</h2>
        <Card className="mx-5">
          <Card.Body>
            <Form>
              <FormLabel className="fw-bold">Nombre de la Vestimenta</FormLabel>
              <div>
                <input
                  value={nombreVestimenta}
                  type="text"
                  className="form-control bg-transparent"
                  placeholder="Vestimenta"
                  onChange={handleNombreVestimenta}
                />
              </div>
            </Form>
            <Button
              className="mt-3 float-end"
              size="lg"
              type="submit"
              onClick={handleData}
            >
              Agregar Vestimenta
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default VestimentaAgregar;
