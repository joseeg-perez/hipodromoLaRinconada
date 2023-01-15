import React, { useEffect, useState } from "react";
import { Col, Container, FormLabel, FormSelect, Row } from "react-bootstrap";
import axios from "axios";

const ApuestaRealizar = () => {
  const [TiposDeApuesta, setTiposDeApuesta] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/tipo_apuestas/listado_de_tipoApuestas")
      .then((res) => {
        console.log(res.data.data);
        setTiposDeApuesta(res.data.data);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/api/v1/eventos/listado_de_eventos")
      .then((res) => {
        console.log(res.data);
        setEventos(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (isLoading) return <div>Cargando</div>;
  let hoy = new Date();
  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1;
  let an = hoy.getFullYear();
  if (dia < 10) dia = `0${dia}`;
  if (mes < 10) mes = `0${mes}`;
  let fechaHoy = `${an}/${mes}/${dia}`;
  const fechaUltimoEvento =
    eventos.data[eventos.data.length - 1].fecha_evento + 1;
  const fechaMin = `${fechaUltimoEvento[0]}${fechaUltimoEvento[1]}${fechaUltimoEvento[2]}${fechaUltimoEvento[3]}-${fechaUltimoEvento[5]}${fechaUltimoEvento[6]}-${fechaUltimoEvento[8]}${fechaUltimoEvento[9]}`;
  return (
    <Container>
      <Row>
        <Col>
          <FormLabel>Seleccionar Evento</FormLabel>
          <FormSelect id="evento">
            {eventos.data.map(
              (evento) =>
                evento.fecha_evento > fechaHoy && (
                  <option value={evento.codigo_evento}>
                    evento ({evento.fecha_evento})
                  </option>
                )
            )}
          </FormSelect>
        </Col>
        <Col>
          <FormLabel>Tipo de Apuesta</FormLabel>
          <FormSelect id="Tipo de Apuesta">
            {TiposDeApuesta.map((tipo) => (
              <option value={tipo.codigo_apuesta}>{tipo.nombre_apuesta}</option>
            ))}
          </FormSelect>
        </Col>
      </Row>
    </Container>
  );
};

export default ApuestaRealizar;
