import React from "react";
import { Container, Row } from "react-bootstrap";
import { CardJinete } from "./CardJinete";

export const ConsultaJinetes = (props) => {
  return (
    <Container>
      <Row className="row-cols-2 mx-5">
        {props.jinetes.map((jinete) => (
          <CardJinete
            key={jinete.key}
            nombre={jinete.nombre1}
            apellido={jinete.apellido1}
            peso={jinete.peso}
            altura={jinete.altura}
            rango={jinete.rango}
            ganancia={jinete.ganancia}
            edad={jinete.edad}
            ejemplar={jinete.ejemplar}
          />
        ))}
      </Row>
    </Container>
  );
};
