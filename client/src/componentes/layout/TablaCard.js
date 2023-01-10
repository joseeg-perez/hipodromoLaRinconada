import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import Tabla from "../tablas/Tabla";

function TablaCard(props) {
  return (
    <Container>
      <Row className="m-5">
        <Card className="px-4">
          <Card.Body>
            <Row>
              <h4 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-1">
                {props.titulo}
              </h4>
            </Row>

            <Row>
              <Tabla
                columnas={props.columnas}
                informacion={props.informacion}
                funcion={props.funcion}
                titulo={props.tituloTabla}
              ></Tabla>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default TablaCard;
