import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import axios from "axios";

const TipoApuestaAgregar = () => {
  // CONSULTA DE LAS REGLAS DE LA APUESTA
  //

  const reg = [
    { codigo_regla: 1, nombre_regla: "Cantidad de caballos" },
    { codigo_regla: 2, nombre_regla: "Cantidad de carreras" },
    { codigo_regla: 3, nombre_regla: "Orden de carreras" },
    { codigo_regla: 5, nombre_regla: "Multiplicador por caballo" },
    {
      codigo_regla: 6,
      nombre_regla: "Cantidad mínima de caballos en la carrera",
    },
    { codigo_regla: 7, nombre_regla: "Monto mínimo por caballo" },
    { codigo_regla: 8, nombre_regla: "Cantidad exacta de caballos a jugar" },
    { codigo_regla: 9, nombre_regla: "Carreras seguidas" },
  ];

  const [reglas, setReglas] = useState(reg);
  const [isLoading, setLoading] = useState(reg);

  useEffect(() => {
    console.log("entro");
    axios
      .get(
        "http://localhost:5000/api/v1/regla_apuesta/listado_de_reglaApuestas"
      )
      .then((res) => {
        console.log(res);
        setReglas(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleData = (event) => {};

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    let nombreApuestaRegla = document.getElementById("nombre").value;
    let descripcionApuestaRegla = document.getElementById("descripcion").value;
    let carreraRegla = [];
    reglas.data.map((x) =>
      carreraRegla.push({
        fk_regla: x.codigo_regla_apuesta,
        valor_regla: document.getElementById(x.nombre_regla_apuesta).value,
      })
    );
    console.warn(nombreApuestaRegla, descripcionApuestaRegla, carreraRegla);
    try {
      await axios.post(
        "http://localhost:5000/api/v1/tipo_apuestas/registrar_tipoApuesta",
        {
          nombreApuestaRegla,
          descripcionApuestaRegla,
          carreraRegla,
        }
      );
    } catch (error) {
      throw error;
    }
    alert("Se creo el tipo de apuesta con éxito");
  };
  return (
    <Container>
      <h2 className="text-center">Agregar Tipo de Apuesta</h2>
      <Form>
        <FormGroup>
          <FormLabel className="fw-bold">Nombre del Tipo de Apuesta</FormLabel>
          <div>
            <input
              id="nombre"
              type="text"
              className="form-control bg-transparent"
              placeholder="Tipo de apuesta"
            />
          </div>
          <div className="mt-3">
            <FormLabel>Descripcion</FormLabel>
            <textarea
              id="descripcion"
              className="form-control"
              rows="4"
            ></textarea>
          </div>
          <div>
            <Row>
              <Col className="col-6 mt-3">
                <FormLabel>Cantidad de Carreras para la apuesta</FormLabel>
                <FormSelect id="cantidad de carreras">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                </FormSelect>
              </Col>
              <Col className="col-6 mt-3">
                <FormLabel>Cantidad de Caballos por carrera</FormLabel>
                <FormSelect id="cantidad de caballos">
                  <option value={0}>Sín límite</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                  <option value={15}>15</option>
                  <option value={16}>16</option>
                </FormSelect>
              </Col>
            </Row>
            <Row>
              <Col className="col-6 mt-3">
                <FormLabel>Orden de carreras en la apuesta</FormLabel>
                <FormSelect id="orden de carreras">
                  <option value={1}>Sí</option>
                  <option value={0}>No</option>
                </FormSelect>
              </Col>
              <Col className="col-6 mt-3">
                <FormLabel>Multiplicador por caballo apostado</FormLabel>
                <input
                  id="multiplicador por caballo apostado"
                  type="number"
                  className="form-control"
                  placeholder="0 Bs"
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6 mt-3">
                <FormLabel>Escogencia de carreras</FormLabel>
                <FormSelect id="escogencia de carreras">
                  <option value={0}>No importa</option>
                  <option value={1}>Primeras</option>
                  <option value={2}>Ultimas</option>
                </FormSelect>
              </Col>
              <Col className="col-6 mt-3">
                <FormLabel>Mínimo otorgado por x Bs apostados</FormLabel>
                <input
                  id="minimo otorgado por x bs apostados"
                  type="number"
                  className="form-control"
                  placeholder="0 Bs"
                />
              </Col>
            </Row>
            <Row>
              {/* <Col className="col-6 mt-3">
                <FormLabel>Escogencia de carreras</FormLabel>
                <FormSelect id="Escogencia de carreras">
                  <option value={0}>No importa</option>
                  <option value={1}>Primeras</option>
                  <option value={2}>Ultimas</option>
                </FormSelect>
              </Col> */}
              <Col className="col-6 mt-3">
                <FormLabel>Costo apuesta</FormLabel>
                <input
                  id="costo apuesta"
                  type="number"
                  className="form-control"
                  placeholder="0 Bs"
                />
              </Col>
            </Row>
          </div>
          <Button onClick={formSubmissionHandler} size="xl" className="mt-4">
            Crear Tipo de Apuesta
          </Button>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default TipoApuestaAgregar;
