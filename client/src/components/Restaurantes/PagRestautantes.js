import React from "react";
import { Container, Row } from "react-bootstrap";
import { CardRestaurante } from "./CardRestaurante";

export const PagRestautantes = (props) => {
  return (
    <Container>
      <h2 className="text-center mt-4">Restaurantes</h2>
      <Row className="row-cols-4">
        {props.restaurantes.map((restaurante) => (
          <CardRestaurante
            nombre={restaurante.nombre}
            descripcion={restaurante.descripcion}
            capacidad={restaurante.capacidad}
            key={restaurante.key}
          />
        ))}
      </Row>
    </Container>
  );
};
