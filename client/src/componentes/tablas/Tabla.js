import React, { Fragment } from "react";
import { Col, Row, Table } from "react-bootstrap";

function Tabla(props) {
  return (
    <Fragment>
      <Col>
        <Row className="text-center">
          <h5 className="fw-bold mb-2 mt-1">{props.titulo}</h5>
        </Row>

        <Row style={{ height: "220px", overflowY: "scroll" }}>
          <Table className="table-responsive">
            <thead>{props.columnas}</thead>
            <tbody>{props.informacion.map(props.funcion)}</tbody>
          </Table>
        </Row>
      </Col>
    </Fragment>
  );
}

export default Tabla;
