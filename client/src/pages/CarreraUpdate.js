import React, { useEffect, useState } from "react";
import { Container, Row, Card, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

const CarreraUpdate = () => {
  const Params = useParams();
  const [carreraAux, setCarreraAux] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [categorias, setCategorias] = useState([]);
  const [nombreCarrera, setNombreCarrera] = useState("");
  const [fkCategoriaCarrera, setFkCategoria] = useState("");
  const [horaCarrera, setHora] = useState("");
  const [premioPrimero, setpremioPrimero] = useState("");
  const [premioSegundo, setpremioSegundo] = useState("");
  const [premioTercero, setpremioTercero] = useState("");
  const [premioCuarto, setpremioCuarto] = useState("");
  const [premioQuinto, setpremioQuinto] = useState("");
  const [fkEvento, setFkEvento] = useState("");
  const [numeroCarrera, setNumeroCarrera] = useState("");
  // let evento;
  // let numCarrera;
  //console.log(Params.carreraId)
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/carreras/${Params.carreraId}`)
      .then((res) => {
        console.log(res);
        setNombreCarrera(res.data.data[0].nombre_carrera);
        setFkCategoria(res.data.data[0].fk_categoria_carrera);
        setHora(res.data.data[0].hora_carrera);
        setpremioPrimero(res.data.data[0].premio_primero);
        setpremioSegundo(res.data.data[0].premio_segundo);
        setpremioTercero(res.data.data[0].premio_tercero);
        setpremioCuarto(res.data.data[0].premio_cuarto);
        setpremioQuinto(res.data.data[0].premio_quinto);
        setFkEvento(res.data.data[0].fk_evento);
        setNumeroCarrera(res.data.data[0].numero_carrera);
        setCarreraAux(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/api/v1/categorias/listado_de_categorias")
      .then((res) => {
        console.log(res);
        setCategorias(res.data);
        setLoading2(false);
      })
      .catch((err) => console.log(err));
  }, []);

  //console.log(categorias);
  // console.log(fkevento);
  // console.log(numeroCarrera);

  if (isLoading || isLoading2) return <div>Cargando</div>;

  const handlerNombre = (event) => {
    setNombreCarrera(event.target.value);
  };

  const handlerCategoria = (event) => {
    setFkCategoria(event.target.value);
    console.log(event.target.value);
  };

  const handlerHora = (event) => {
    setHora(event.target.value);
  };

  const handlerpremioPrimero = (event) => {
    setpremioPrimero(event.target.value);
  };

  const handlerpremioSegundo = (event) => {
    setpremioSegundo(event.target.value);
  };

  const handlerpremioTercero = (event) => {
    setpremioTercero(event.target.value);
  };

  const handlerpremioCuarto = (event) => {
    setpremioCuarto(event.target.value);
  };

  const handlerpremioQuinto = (event) => {
    setpremioQuinto(event.target.value);
  };
  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5000/api/v1/carreras/${Params.carreraId}`,
        {
          nombreCarrera,
          numeroCarrera,
          premioPrimero,
          premioSegundo,
          premioTercero,
          premioCuarto,
          premioQuinto,
          horaCarrera,
          fkEvento,
          fkCategoriaCarrera,
        }
      );
    } catch (error) {
      throw error;
    }
    alert("Se actualizo con éxito");
    console.warn(
      nombreCarrera,
      numeroCarrera,
      premioPrimero,
      premioSegundo,
      premioTercero,
      premioCuarto,
      premioQuinto,
      horaCarrera,
      fkEvento,
      fkCategoriaCarrera
    );
    // setNombreCarrera("");
    // setNumeroCarrera("");
    // setpremioPrimero("");
    // setpre("");
    // setapellido2Persona("");
    // setFechaNacimiento("");
    // setfkRango("");
    // setAlturaJinete("");
    // setPesoJinete("");
    // setToggleRango(false);
    // setLoading(true);
    // setRangos([]);
  };

  const handleDelete = (event) => {
    
    axios
      .delete(`http://localhost:5000/api/v1/carreras/${Params.carreraId}`)
      .then((res) => {
        if (res.data != null) {
          alert("Se eliminó la carrera con éxito");
        }
      })
      .catch((err) => console.log(err));
  };

  const categoriaActual = categorias.data.find(
    (categoria) => fkCategoriaCarrera == categoria.codigo_categoria
  ).codigo_categoria;
  console.log(categoriaActual);
  return (
    <Container>
      <Form>
        <Row className="text-center">
          <h1>MODIFICAR CARRERA</h1>
        </Row>

        <Row>
          <Row className="" style={{ marginLeft: "40px" }}>
            <h3>INFORMACION GENERAL</h3>
          </Row>

          <Row>
            <Col className="justify-content-center align-items-center mx-5">
              <Card>
                <Card.Body>
                  <Row className="row row-cols-2">
                    <Col>
                      <Row className="row row-cols-2">
                        <Col>
                          <h5>NOMBRE DE LA CARRERA</h5>
                        </Col>
                        <Col>
                          <input
                            className=""
                            id="nombre"
                            value={nombreCarrera}
                            onChange={handlerNombre}
                          ></input>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col>
                          <h5>HORA DE LA CARRERA</h5>
                        </Col>
                        <Col>
                          <input
                            type="time"
                            id="hora"
                            min="12:00"
                            max="20:00"
                            value={horaCarrera}
                            onChange={handlerHora}
                          ></input>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row className="mt-2">
                        <Col className="col-6">
                          <h5>CATEGORIA</h5>
                        </Col>
                        <Col className="col-4">
                          <select
                            className=""
                            style={{ width: "188.8px" }}
                            id="categoria"
                            onChange={handlerCategoria}
                          >
                            <option value={categoriaActual}>
                              {
                                categorias.data.find(
                                  (categoria) =>
                                    fkCategoriaCarrera ==
                                    categoria.codigo_categoria
                                ).nombre_categoria
                              }
                            </option>

                            {categorias.data.map((x) =>
                              x.codigo_categoria != categoriaActual ? (
                                <option value={x.codigo_categoria}>
                                  {x.nombre_categoria}
                                </option>
                              ) : (
                                console.log("no")
                              )
                            )}
                          </select>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>

        <Row className="mt-3">
          <Row className="" style={{ marginLeft: "40px" }}>
            <h3>DETALLES DE LA CARRERA</h3>
          </Row>

          <Row>
            <Col className="justify-content-center align-items-center mx-5">
              <Card>
                <Card.Body>
                  <Row className="mt-3 d-flex justify-content-center">
                    <Row className="text-center">
                      <h3>PREMIOS</h3>
                    </Row>

                    <Row className="row row-cols-3 mt-3 d-flex">
                      <Col className=" border border-2 border-dark border-top-0 border-start-0">
                        <Row className="row row-cols-2 d-flex justify-content-center mb-2">
                          <Col className="col-1 d-flex align-items-end">
                            <h2>1</h2>
                          </Col>
                          <Col className="">
                            <Card style={{ width: "145px", height: "70px" }}>
                              <Card.Body className="d-flex align-items-center">
                                <Row>
                                  <input
                                    id="premioPrimero"
                                    type="number"
                                    value={premioPrimero}
                                    onChange={handlerpremioPrimero}
                                  ></input>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Col>

                      <Col className="border border-2 border-dark border-top-0 border-start-0">
                        <Row className="row row-cols-2 d-flex justify-content-center mb-2">
                          <Col className="col-1 d-flex align-items-end">
                            <h2>2</h2>
                          </Col>
                          <Col>
                            <Card style={{ width: "145px", height: "70px" }}>
                              <Card.Body className="d-flex align-items-center">
                                <Row>
                                  <input
                                    id="premioSegundo"
                                    type="number"
                                    value={premioSegundo}
                                    onChange={handlerpremioSegundo}
                                  ></input>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Col>

                      <Col className="border border-2 border-dark border-top-0 border-start-0 border-end-0">
                        <Row className="row row-cols-2 d-flex justify-content-center mb-2">
                          <Col className="col-1 d-flex align-items-end">
                            <h2>3</h2>
                          </Col>
                          <Col>
                            <Card style={{ width: "145px", height: "70px" }}>
                              <Card.Body className="d-flex align-items-center">
                                <Row className="d-flex justify-content-center align-items-center">
                                  <input
                                    id="premioTercero"
                                    type="number"
                                    value={premioTercero}
                                    onChange={handlerpremioTercero}
                                  ></input>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Col>

                      <Col className=" mb-3 border border-2 border-dark border-top-0 border-start-0">
                        <Row className="row row-cols-2 d-flex justify-content-center mb-2 mt-2">
                          <Col className="col-1 d-flex align-items-end">
                            <h2>4</h2>
                          </Col>
                          <Col className="">
                            <Card style={{ width: "145px", height: "70px" }}>
                              <Card.Body className="d-flex align-items-center">
                                <Row>
                                  <input
                                    id="premioCuarto"
                                    type="number"
                                    value={premioCuarto}
                                    onChange={handlerpremioCuarto}
                                  ></input>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Col>

                      <Col className="mb-3 border border-2 border-dark border-top-0 border-start-0">
                        <Row className="row row-cols-2 d-flex justify-content-center mb-2 mt-2">
                          <Col className="col-1 d-flex align-items-end">
                            <h2>5</h2>
                          </Col>
                          <Col>
                            <Card style={{ width: "145px", height: "70px" }}>
                              <Card.Body className="d-flex align-items-center">
                                <Row>
                                  <input
                                    id="premioQuinto"
                                    type="number"
                                    value={premioQuinto}
                                    onChange={handlerpremioQuinto}
                                  ></input>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row></Row>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>

        <Row className="mt-3 d-flex justify-content-center">
          <Col className="col-auto d-flex justify-content-center">
            <Button className="fw-bold" onClick={formSubmissionHandler} size="xl" style={{color: "black"}}>
              GUARDAR
            </Button>
          </Col>

          <Col className="col-auto me-5">
          <Button
            className="fw-bold"
            style={{
              backgroundColor: "#FA6660",
              color: "black",
              border: "black",
            }}
            onClick={handleDelete}
          >
            ELIMINAR CARRERA
          </Button>
        </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CarreraUpdate;
