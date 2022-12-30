import React from "react";
import { Container, Row } from "react-bootstrap";
import { CardPelaje } from "./CardPelaje";

export const PagPelaje = (props) => {
  return (
    <Container>
      <h2 className="text-center mt-4">Pelajes</h2>
      <Row className="row-cols-4">
        {props.pelajes.map((pelaje) => (
          <CardPelaje
            nombre={pelaje.nombre}
            abrev={pelaje.abrev}
            key={pelaje.key}
          />
        ))}
      </Row>
    </Container>
  );
};
