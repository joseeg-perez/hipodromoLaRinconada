import React from "react";
import { Container, Row } from "react-bootstrap";
import CardN from "./CardN";

export const PagConsultaEjemplar = (props) => {
  return (
    <Container>
      <Row className="row-cols-2 mx-5">
        {props.ejemplares.map((ejemplar) => (
          <CardN
            key={ejemplar.nombre}
            imagen={ejemplar.imagen}
            nombre={ejemplar.nombre}
            numero={ejemplar.numero}
            pelaje={ejemplar.pelaje}
            sexo={ejemplar.sexo}
            padre={ejemplar.padre}
            madre={ejemplar.madre}
            stud={ejemplar.stud}
            fecha_nac={ejemplar.fecha_nac}
            entrenador={ejemplar.entrenador}
            mejorPos={ejemplar.mejorPos}
            cantidad2do={ejemplar.cantidad2do}
            ganancia={ejemplar.ganancia}
          />
        ))}
      </Row>
    </Container>
  );
};
