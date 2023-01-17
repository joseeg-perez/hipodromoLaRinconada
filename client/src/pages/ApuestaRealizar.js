import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormLabel,
  FormSelect,
  Row,
  Table,
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Pago from "./Pago";

const ApuestaRealizar = () => {
  const [TiposDeApuesta, setTiposDeApuesta] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [Posiciones, setPosiciones] = useState([]);
  const [Carreras, setCarreras] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isLoadingCarreras, setLoadingCarreras] = useState(true);
  const [isLoadingEjemplares, setLoadingEjemplares] = useState(true);
  const [isLoadingReglas, setLoadingReglas] = useState(true);
  const [reglas, setReglas] = useState([]);
  const [carrerasFull, setcarrerasFull] = useState(false);
  const [EjemplaresFull, setEjemplaresFull] = useState(false);
  const [ejemplares, setEjemplares] = useState([]);
  const [toggleEvento, settoggleEvento] = useState(true);
  const [toggleTipoApuesta, settoggleTipoApuesta] = useState(true);
  const [LoadingNuevasCarreras, setLoadingNuevasCarreras] = useState(false);
  const [toggleDescripcion, settoggleDescripcion] = useState(false);
  const [togglePosiciones, settogglePosiciones] = useState(false);
  const [toggleSeleccionEjemplares, settoggleSeleccionEjemplares] =
    useState(false);
  const [ContEjemplares, setContEjemplares] = useState(0);
  const [togglePago, settogglePago] = useState(false);
  const [toggleCarrera, settoggleCarrera] = useState(true);
  const [CarrerasSeleccionadas, setCarrerasSeleccionadas] = useState([]);
  const [CarrerasOrdenadas, setCarrerasOrdenadas] = useState([]);
  const [EjemplaresSeleccionados, setEjemplaresSeleccionados] = useState([]);
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

  const handleCardPago = (event) => {
    settogglePago(true);
  };

  const handleTipoApuesta = async (event) => {
    event.preventDefault();
    axios
      .get(
        `http://localhost:5000/api/v1/regla_tipo_apuesta/${
          document.getElementById("Tipo de Apuesta").value
        }`
      )
      .then((res) => {
        console.log(res);
        setReglas(res.data);
        settoggleDescripcion(true);
        setLoadingReglas(false);
        settoggleTipoApuesta(false);
      })
      .catch((err) => console.log(err));
  };

  const handleCarrera = async (event) => {
    event.preventDefault();
    axios
      .get(
        `http://localhost:5000/api/v1/participaciones/participaciones_para_retiro/${
          document.getElementById("carrera").value
        }`
      )
      .then((res) => {
        console.log(res);
        setEjemplares(res.data);
        setLoadingEjemplares(false);
      })
      .catch((err) => console.log(err));
  };

  const handlePago = async (event) => {
    let costoApuesta = reglas.data.find(
      (regla) => regla.nombre_regla_apuesta == "costo apuesta"
    ).valor;
    let fk_tipo_apuesta = document.getElementById("Tipo de Apuesta").value;
    console.warn(costoApuesta, EjemplaresSeleccionados, fk_tipo_apuesta);
  };

  const handleEvento = async (event) => {
    event.preventDefault();
    settoggleEvento(false);
    axios
      .get(
        `http://localhost:5000/api/v1/carreras/listadoDeCarreraXEvento/${
          document.getElementById("evento").value
        }`
      )
      .then((res) => {
        console.log(res);

        if (
          reglas.data.find(
            (regla) => regla.nombre_regla_apuesta == "escogencia de carreras"
          ).valor == 0
        ) {
          setCarreras(res.data.data);
        } else if (
          reglas.data.find(
            (regla) => regla.nombre_regla_apuesta == "escogencia de carreras"
          ).valor == 1
        ) {
          setCarreras(
            res.data.data.slice(
              0,
              reglas.data.find(
                (regla) => (regla.nombre_regla_apuesta = "cantidad de carreras")
              ).valor
            )
          );
        } else {
          setCarreras(
            res.data.data
              .reverse()
              .slice(
                0,
                reglas.data.find(
                  (regla) =>
                    (regla.nombre_regla_apuesta = "cantidad de carreras")
                ).valor
              )
          );
        }
        setLoadingCarreras(false);
        settoggleEvento(false);
      })
      .catch((err) => console.log(err));
  };

  const añadirCarrera = (event) => {
    if (
      reglas.data.find(
        (regla) => regla.nombre_regla_apuesta == "orden de carreras"
      ).valor == 1
    ) {
      setLoadingNuevasCarreras(true);
      let CarrerasDispo;
      let indexInicial = Carreras.findIndex(
        (carrera) =>
          carrera.codigo_carrera == document.getElementById("carrera").value
      );
      let indexFinal =
        indexInicial +
        reglas.data.find(
          (regla) => regla.nombre_regla_apuesta == "cantidad de carreras"
        ).valor;
      if (indexFinal - indexInicial >= Carreras.length)
        CarrerasDispo = Carreras.slice(indexInicial);
      else CarrerasDispo = Carreras.slice(indexInicial, indexFinal);
      console.log(CarrerasDispo);
      setCarrerasOrdenadas(CarrerasDispo);
    }
    setCarrerasSeleccionadas((prevState) => {
      return [...prevState, document.getElementById("carrera").value];
    });
    console.log(reglas.data[0].nombre_regla_apuesta);
    settoggleCarrera(false);
    settoggleSeleccionEjemplares(true);
    setEjemplaresFull(false);
    setContEjemplares(0);
    if (
      CarrerasSeleccionadas.length ==
      reglas.data.find(
        (regla) => regla.nombre_regla_apuesta == "cantidad de carreras"
      ).valor -
        1
    ) {
      setcarrerasFull(true);
    }
    console.log(CarrerasSeleccionadas);
    setLoadingNuevasCarreras(false);
  };

  const handlePosiciones = (event) => {
    settogglePosiciones(true);
  };

  const handleEjemplarPorCarrera = (event) => {
    setContEjemplares(ContEjemplares + 1);
    console.log(ContEjemplares);
    let nuevoEjemplar = {
      participacion: ejemplares.data.find(
        (ejemplar) =>
          ejemplar.codigo_participacion ==
          document.getElementById("ejemplar").value
      ),
      posicion: document.getElementById("posicion").value,
    };
    setPosiciones((prevState) => {
      return [...prevState, document.getElementById("posicion").value];
    });
    setEjemplaresSeleccionados((prevState) => {
      return [...prevState, nuevoEjemplar];
    });
    if (
      ContEjemplares ==
      reglas.data.find(
        (regla) => regla.nombre_regla_apuesta == "cantidad de caballos"
      ).valor -
        1
    ) {
      settoggleCarrera(true);
      settoggleSeleccionEjemplares(false);
      settogglePosiciones(false);
      setEjemplaresFull(true);
      setPosiciones([]);
    }
    console.log(EjemplaresSeleccionados);
  };

  return (
    <Container>
      <Row>
        <Col>
          <FormLabel>Tipo de Apuesta</FormLabel>
          <FormSelect
            id="Tipo de Apuesta"
            onChange={handleTipoApuesta}
            disabled={!toggleTipoApuesta}
          >
            {TiposDeApuesta.map((tipo) => (
              <option value={tipo.codigo_apuesta}>{tipo.nombre_apuesta}</option>
            ))}
          </FormSelect>
        </Col>
        <Col>
          <FormLabel>Seleccionar Evento</FormLabel>
          <FormSelect id="evento" onChange={handleEvento}>
            <option value={-1} disabled={!toggleEvento}>
              evento
            </option>
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
        <Row>
          <Col className="col-6 mt-2">
            {toggleDescripcion && (
              <text className="text-muted">
                {
                  TiposDeApuesta.find(
                    (tipo) =>
                      tipo.codigo_apuesta ==
                      document.getElementById("Tipo de Apuesta").value
                  ).descripcion_apuesta
                }
              </text>
            )}
          </Col>
        </Row>
      </Row>
      <Row className="mt-3">
        <Col>
          <FormLabel>Seleccionar Carrera</FormLabel>
          <FormSelect
            id="carrera"
            onChange={handleCarrera}
            disabled={carrerasFull || !toggleCarrera}
          >
            <option value={-1} disabled={!toggleCarrera}>
              carrera
            </option>
            {console.log(CarrerasOrdenadas)}
            {console.log(Carreras)}
            {!isLoadingCarreras &&
            !LoadingNuevasCarreras &&
            (reglas.data.find(
              (regla) => regla.nombre_regla_apuesta == "orden de carreras"
            ).valor == 0 ||
              CarrerasOrdenadas.length == 0)
              ? Carreras.map((carrera) => (
                  <option
                    value={carrera.codigo_carrera}
                    disabled={
                      CarrerasSeleccionadas.find(
                        (carreraS) => carreraS == carrera.codigo_carrera
                      ) != null
                    }
                  >
                    Carrera Nro. {carrera.numero_carrera} (
                    {carrera.hora_carrera})
                  </option>
                ))
              : !isLoadingCarreras &&
                !LoadingNuevasCarreras &&
                CarrerasOrdenadas.length > 0 &&
                CarrerasOrdenadas.map((carrera) => (
                  <option
                    value={carrera.codigo_carrera}
                    disabled={
                      CarrerasSeleccionadas.find(
                        (carreraS) => carreraS == carrera.codigo_carrera
                      ) != null
                    }
                  >
                    Carrera Nro. {carrera.numero_carrera} (
                    {carrera.hora_carrera})
                  </option>
                ))}
          </FormSelect>
          <Button
            className="mt-3"
            onClick={añadirCarrera}
            disabled={carrerasFull || !toggleCarrera}
          >
            Añadir Carrera
          </Button>
        </Col>
        <Col>
          <Table className="table-responsive table-hover">
            <thead>
              <th>Carreras seleccionadas</th>
            </thead>
            <tbody>
              {CarrerasSeleccionadas.map((carreraS) => (
                <tr>
                  {Carreras.map(
                    (carrera) =>
                      carrera.codigo_carrera == carreraS && (
                        <td id="carreraS">
                          Carrera Nro. {carrera.numero_carrera} (
                          {carrera.hora_carrera})
                        </td>
                      )
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <FormLabel>Seleccionar Ejemplar</FormLabel>
          <FormSelect
            id="ejemplar"
            disabled={EjemplaresFull || !toggleSeleccionEjemplares}
            onChange={handlePosiciones}
          >
            <option value={-1} disabled={toggleSeleccionEjemplares}>
              Ejemplar
            </option>
            {!isLoadingEjemplares &&
              ejemplares.data.map((ejemplar) => (
                <option
                  value={ejemplar.codigo_participacion}
                  disabled={
                    EjemplaresSeleccionados.find(
                      (participacion) =>
                        participacion.participacion.codigo_participacion ==
                        ejemplar.codigo_participacion
                    ) != null
                  }
                >
                  {ejemplar.nombre_ejemplar}
                </option>
              ))}
          </FormSelect>
        </Col>
        <Col>
          <Table className="table-responsive table-hover">
            <thead>
              <tr>
                <th>Ejemplar</th>
                <th>Posición</th>
              </tr>
            </thead>
            <tbody>
              {EjemplaresSeleccionados.map((participacion) => (
                <tr>
                  <td>{participacion.participacion.nombre_ejemplar}</td>
                  <td>{participacion.posicion}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <FormLabel>Posicion para ejemplar seleccionado</FormLabel>
          <FormSelect
            id="posicion"
            disabled={EjemplaresFull || !togglePosiciones}
          >
            <option
              value={1}
              disabled={Posiciones.find((posicion) => posicion == 1) != null}
            >
              Primero
            </option>
            <option
              value={2}
              disabled={Posiciones.find((posicion) => posicion == 2) != null}
            >
              Segundo
            </option>
            <option
              value={3}
              disabled={Posiciones.find((posicion) => posicion == 3) != null}
            >
              Tercero
            </option>
            <option
              value={4}
              disabled={Posiciones.find((posicion) => posicion == 4) != null}
            >
              Cuarto
            </option>
            <option
              value={5}
              disabled={Posiciones.find((posicion) => posicion == 5) != null}
            >
              Quinto
            </option>
            <option
              value={6}
              disabled={Posiciones.find((posicion) => posicion == 6) != null}
            >
              Sexto
            </option>
            <option
              value={7}
              disabled={Posiciones.find((posicion) => posicion == 7) != null}
            >
              Séptimo
            </option>
            <option
              value={8}
              disabled={Posiciones.find((posicion) => posicion == 8) != null}
            >
              Octavo
            </option>
            <option
              value={9}
              disabled={Posiciones.find((posicion) => posicion == 9) != null}
            >
              Noveo
            </option>
            <option
              value={10}
              disabled={Posiciones.find((posicion) => posicion == 10) != null}
            >
              Décimo
            </option>
            <option
              value={11}
              disabled={Posiciones.find((posicion) => posicion == 11) != null}
            >
              Onceavo
            </option>
            <option
              value={12}
              disabled={Posiciones.find((posicion) => posicion == 12) != null}
            >
              Doceavo
            </option>
            <option
              value={13}
              disabled={Posiciones.find((posicion) => posicion == 13) != null}
            >
              Treceavo
            </option>
            <option
              value={14}
              disabled={Posiciones.find((posicion) => posicion == 14) != null}
            >
              Catorceavo
            </option>
            <option
              value={15}
              disabled={Posiciones.find((posicion) => posicion == 15) != null}
            >
              Quinceavo
            </option>
            <option
              value={16}
              disabled={Posiciones.find((posicion) => posicion == 16) != null}
            >
              Dieciseisavo
            </option>
          </FormSelect>
          <Button
            className="mt-3"
            onClick={handleEjemplarPorCarrera}
            disabled={EjemplaresFull || !toggleSeleccionEjemplares}
          >
            Añadir Ejemplar a la carrera
          </Button>
        </Col>
        <Col></Col>
      </Row>
      <div className="text-center">
        {carrerasFull && EjemplaresFull && (
          <Button
            className="btn btn-success btn-xl mx-1 mt-5"
            onClick={handleCardPago}
          >
            Proceder al Pago
          </Button>
        )}
        {togglePago && (
          <div>
            <Pago
              apuesta={EjemplaresSeleccionados}
              costo={
                reglas.data.find(
                  (regla) => regla.nombre_regla_apuesta == "costo apuesta"
                ).valor
              }
              TipoApuesta={document.getElementById("Tipo de Apuesta").value}
            ></Pago>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ApuestaRealizar;
