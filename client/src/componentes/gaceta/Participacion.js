import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

const Participacion = (props) => {
  return (
    <Fragment>
      <Col
        className="col-auto text-center border border-2 border-dark border-top-0 border-start-0 border-bottom-0"
        style={{ width: "71px" }}
      >
        <Row>
          <p>{`PP:${props.parti.puesto_pista}`}</p>
        </Row>
        <Row>
          <h1>{props.parti.gualdrapa}</h1>
        </Row>
      </Col>

      <Col
        className="col-2 border border-2 border-dark border-top-0 border-start-0 border-bottom-0"
        style={{ width: "195px" }}
      >
        <Row>
          <h6>{`STUD:${props.parti.stud.toUpperCase()}`}</h6>
        </Row>
        <Row>
          <h4>{props.parti.nombre_ejemplar}</h4>
        </Row>
        <Row>
          <h6>
            {props.parti.madre && props.parti.padre
              ? `${props.parti.madre}-${props.parti.padre}`
              : `Sin padres`}
          </h6>
        </Row>
        <Row>
          <h6>
            {props.parti.sexo == "m"
              ? `C-${props.parti.edad.days} dias ${props.parti.edad.months} meses-${props.parti.pelaje}`
              : `Y-${props.parti.edad.days} dias ${props.parti.edad.months} meses-${props.parti.pelaje}`}
          </h6>
        </Row>
        <Row>
          <h6>{`Ultima carrera: ${props.parti.diferencia_dias} dias`}</h6>
        </Row>
      </Col>

      <Col
        className="col-2 border border-2 border-dark border-top-0 border-start-0 border-bottom-0"
        style={{ width: "195px" }}
      >
        <Row className="border border-1 border-dark border-top-0 border-start-0 border-end-0">
          <h6>{`J:${props.parti.jinete.toUpperCase()}`}</h6>
        </Row>
        <Row className="border border-1 border-dark border-top-0 border-start-0 border-end-0">
          <h6>{`Peso del Jinete:${props.parti.peso_jinete} kg`}</h6>
        </Row>
        <Row>
          <h6>{`E: ${props.parti.entrenador.toUpperCase()}`}</h6>
        </Row>
        <Row className="row row-cols-2">
          <Col className="col-6">
            <h6 style={{ fontSize: "12px" }}>
              {props.parti.porcentaje
                ? `${props.parti.porcentaje}% vic`
                : `0% vic`}
            </h6>
          </Col>
          <Col className="col-6">
            <h6 style={{ fontSize: "12px" }}>{`SR medio: ${props.parti.promedio_sr}`}</h6>
          </Col>
        </Row>
        <Row className="row row-cols-2">
          <Col className="col-4 border border-2 border-dark border-top-0 border-start-0 border-bottom-0">
            <Row>
              {props.parti.implementos.map((x) => (
                <Col className="col-auto">
                  <h6 style={{ fontSize: "12px" }}>{x.abrev_implemento}</h6>
                </Col>
              ))}
            </Row>
          </Col>
          <Col className="col-8">
            <Row className="row row-cols-2">
              {props.parti.medicamentos.map((x) => (
                <Col className="col-auto">
                  <h6 style={{ fontSize: "12px" }}>{x.nombre_medicamento}</h6>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Col>

      <Col className="col-4" style={{ width: "479px" }}>
        {props.parti.carrerasPasadas.map((x) => (
          <Row className="row row-cols-9 border border-1 border-dark border-top-0 border-start-0 border-end-0">
            <Col className="col-auto">
              <p style={{ fontSize: "10px" }}>{x.fecha_evento}</p>
            </Col>

            <Col className="col-auto">
              <p style={{ fontSize: "10px" }}>{x.peso_caballo}</p>
            </Col>

            <Col className="col-auto" style={{ width: "46px" }}>
              <p style={{ fontSize: "10px" }}>{x.distancia}</p>
            </Col>

            <Col className="col-auto">
              <p
                style={{ fontSize: "10px" }}
              >{`${x.tiempo_300m}-${x.tiempo_800m}`}</p>
            </Col>

            <Col className="col-auto">
              <p style={{ fontSize: "10px" }}>{x.peso_jinete}</p>
            </Col>

            <Col
              className="col-auto d-flex justify-content-center"
              style={{ width: "110px" }}
            >
              <p style={{ fontSize: "10px" }}>{x.jinete}</p>
            </Col>

            <Col className="col-auto" style={{ width: "46px" }}>
              <p style={{ fontSize: "10px" }}>{x.premio_primero}</p>
            </Col>

            <Col className="col-auto" style={{ width: "89px" }}>
              <p style={{ fontSize: "10px" }}>{x.ganador}</p>
            </Col>
          </Row>
        ))}
        <Row className="row row-cols-3">
          
          <Col className="col-auto">
          <p style={{ fontSize: "14px" }}>{`Mayor SR en esta distancia: ${props.parti.mejor_sr}`}</p>
          </Col>

          <Col className="col-auto">
          <p style={{ fontSize: "14px" }}>{`Record promedio en esta distancia:${props.parti.promedio_posicion}`}</p>
          </Col>
        </Row>
      </Col>

      <Col className="col-3" style={{ width: "290px" }}>
        {props.parti.carrerasPasadas.map((x) => (
          <Row className="row row-cols-9 border border-1 border-dark border-top-0 border-start-0 border-end-0">
            <Col className="col-3">
              <p style={{ fontSize: "10px" }}>{x.nombre_cuerpo_dif}</p>
            </Col>

            <Col className="col-auto">
              <p style={{ fontSize: "10px" }}>{x.speed_rating}</p>
            </Col>

            <Col className="col-2">
              <p style={{ fontSize: "10px" }}>{x.variante}</p>
            </Col>

            <Col className="col-auto">
              <p style={{ fontSize: "10px" }}>{x.tiempo_ganador}</p>
            </Col>

            <Col className="col-auto">
              <p style={{ fontSize: "10px" }}>{x.tiempo_total}</p>
            </Col>

            <Col className="col-auto">
              <p style={{ fontSize: "10px" }}>{x.participantes}</p>
            </Col>
          </Row>
        ))}
        <Row>
        <Col className="col-auto">
            <p style={{ fontSize: "14px" }}>{`Produccion del ejemplar:${props.parti.produccion}`}</p>
          </Col>
        </Row>
      </Col>
    </Fragment>
  );
};

export default Participacion;
