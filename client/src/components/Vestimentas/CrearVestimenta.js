import React, { useState } from "react";
import { Button, Card, Container, Form, FormLabel } from "react-bootstrap";

const CrearVestimenta = () => {
  const [NombreVestimenta, setNombreVestimenta] = useState("");
  const handleNombreVestimenta = (event) => {
    setNombreVestimenta(event.target.value);
  };
  const handleData = (event) => {
    event.preventDefault();
    console.warn(NombreVestimenta);
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
                  value={NombreVestimenta}
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

export default CrearVestimenta;
