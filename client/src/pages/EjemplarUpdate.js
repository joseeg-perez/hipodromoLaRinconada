import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Form,
  FormLabel,
  Row,
  Col,
  Button,
  FormCheck,
  FormGroup,
  FormSelect,
  FormControl,
} from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

const EjemplarUpdate = () => {
  const Params = useParams();
  const [nombreEjemplar, setNombreEjemplar] = useState("");
  const [numeroEjemplar, setNumeroEjemplar] = useState("");
  const [tatlabialEjemplar, setTatlabialEjemplar] = useState(0);
  const [precioEjemplar, setPrecioEjemplar] = useState(0);
  const [fecha_nacEjemplar, setFecha_nacEjemplar] = useState(0);
  const [pesoEjemplar, setPesoEjemplar] = useState("");
  const [padreEjemplar, setPadreEjemplar] = useState("");
  const [madreEjemplar, setMadreEjemplar] = useState("");
  const [imagenEjemplar, setImagenEjemplar] = useState("");
  const [propietarioEjemplar, setPropietarioEjemplar] = useState("");
  const [haraEjemplar, setHaraEjemplar] = useState("");
  const [pelajeEjemplar, setPelajeEjemplar] = useState("");
  const [generoEjemplar, setGeneroEjemplar] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [isLoading1, setLoading1] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [isLoading3, setLoading3] = useState(true);
  const [isLoading4, setLoading4] = useState(true);
  const [isLoading5, setLoading5] = useState(true);
  const [isLoading6, setLoading6] = useState(true);
  const [pelajes, setPelajes] = useState([]);
  const [haras, setHaras] = useState([]);
  const [propietarios, setPropietarios] = useState([]);
  const [ejemplares, setEjemplares] = useState([]);
  const [caballerizas, setCaballerizas] = useState([]);
  const [caballeriza, setCaballeriza] = useState([]);
  const [puestos, setPuestos] = useState([]);
  const [puestoEjemplar, setPuestoEjemplar] = useState([]);
  const [togglePelaje, settogglePelaje] = useState(false);
  const [togglePapas, settogglePapas] = useState(false);
  const [toggleMamas, settoggleMamas] = useState(false);
  const [toggleHaras, settoggleHaras] = useState(false);
  const [toggleCaballerizas, settoggleCaballerizas] = useState(false);
  const [togglePuestos, settogglePuestos] = useState(false);
  const [togglePropietarios, settogglePropietarios] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/pelajes/listado_de_pelajes")
      .then((res) => {
        console.log(res);
        setPelajes(res.data);
        setLoading5(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:5000/api/v1/ejemplares/${Params.ejemplarId}`)
      .then((res) => {
        console.log(res);
        setNombreEjemplar(res.data.data[0].nombre_ejemplar);
        setNumeroEjemplar(res.data.data[0].numero_ejemplar);
        setTatlabialEjemplar(res.data.data[0].numero_tatuaje_labial);
        setPrecioEjemplar(res.data.data[0].precio_ejemplar);
        setFecha_nacEjemplar(res.data.data[0].fechanac);
        setPesoEjemplar(res.data.data[0].peso_ejemplar);
        setPadreEjemplar(res.data.data[0].fk_padre_ejemplar);
        setMadreEjemplar(res.data.data[0].fk_madre_ejemplar);
        setImagenEjemplar(res.data.data[0].imagen_ejemplar);
        setHaraEjemplar(res.data.data[0].fk_hara);
        setPelajeEjemplar(res.data.data[0].fk_pelaje);
        setGeneroEjemplar(res.data.data[0].sexo_ejemplar);
        setLoading6(false);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/api/v1/ejemplares/listado_de_ejemplares")
      .then((res) => {
        console.log(res);
        setEjemplares(res.data);
        setLoading4(false);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/api/v1/haras/listado_de_haras")
      .then((res) => {
        console.log(res);
        setHaras(res.data);
        setLoading3(false);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/api/v1/caballerizas/listado_de_caballerizas")
      .then((res) => {
        console.log(res);
        setCaballerizas(res.data);
        setLoading2(false);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/api/v1/puestos/listado_de_puestos")
      .then((res) => {
        console.log(res);
        setPuestos(res.data);
        setLoading1(false);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/api/v1/propietarios/listado_de_propietarios")
      .then((res) => {
        console.log(res);
        setPropietarios(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(pelajes);
  // console.log(haras);
  // console.log(propietarios);
  // console.log(ejemplares);
  // console.log(caballerizas);
  // console.log(puestos);
  if (
    isLoading ||
    isLoading1 ||
    isLoading2 ||
    isLoading3 ||
    isLoading4 ||
    isLoading5
  ) {
    return <div>Cargando</div>;
  }
  const handleData = async (event) => {
    console.log(imagenEjemplar);
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5000/api/v1/ejemplares/${Params.ejemplarId}`,
        {
          nombreEjemplar,
          numeroEjemplar,
          tatlabialEjemplar,
          precioEjemplar,
          fecha_nacEjemplar,
          pesoEjemplar,
          padreEjemplar,
          madreEjemplar,
          imagenEjemplar,
          propietarioEjemplar,
          haraEjemplar,
          generoEjemplar,
          pelajeEjemplar,
        }
      );
    } catch (error) {
      throw error;
    }
    console.warn(
      "all data",
      nombreEjemplar,
      numeroEjemplar,
      tatlabialEjemplar,
      precioEjemplar,
      fecha_nacEjemplar,
      pesoEjemplar,
      padreEjemplar,
      madreEjemplar,
      imagenEjemplar,
      propietarioEjemplar,
      haraEjemplar,
      generoEjemplar,
      pelajeEjemplar
    );
    setNombreEjemplar("");
    setNumeroEjemplar("");
    setTatlabialEjemplar("");
    setPrecioEjemplar("");
    setFecha_nacEjemplar("");
    setPesoEjemplar("");
    setPadreEjemplar("");
    setMadreEjemplar("");
    setImagenEjemplar("");
    setPropietarioEjemplar("");
    setHaraEjemplar("");
    setPelajeEjemplar("");
    setGeneroEjemplar("");
  };
  const handleNombre = (event) => {
    setNombreEjemplar(event.target.value);
  };
  const handleNumero = (event) => {
    setNumeroEjemplar(event.target.value);
  };
  const handleTatlabial = (event) => {
    setTatlabialEjemplar(event.target.value);
  };
  const handlePrecio = (event) => {
    setPrecioEjemplar(event.target.value);
  };
  const handleFecha_nac = (event) => {
    setFecha_nacEjemplar(event.target.value);
  };
  const handlePeso = (event) => {
    setPesoEjemplar(event.target.value);
  };
  const handlePadre = (event) => {
    setPadreEjemplar(event.target.value);
    settogglePapas(true);
  };
  const handleMadre = (event) => {
    setMadreEjemplar(event.target.value);
    settoggleMamas(true);
  };
  const handleImagen = (event) => {
    setImagenEjemplar(event.target.value);
  };
  const handleHara = (event) => {
    setHaraEjemplar(event.target.value);
    settoggleHaras(true);
  };
  const handlePelaje = (event) => {
    setPelajeEjemplar(event.target.value);
    settogglePelaje(true);
  };
  const handleGenero = (event) => {
    setGeneroEjemplar(event.target.value);
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="mx-5">
          <Card.Body className="px-4">
            <Form onSubmit={handleData}>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Editar Ejemplar
              </h3>

              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={nombreEjemplar}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleNombre}
                    />
                    <FormLabel>Nombre del ejemplar</FormLabel>
                  </div>
                </Col>

                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={numeroEjemplar}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleNumero}
                    />
                    <FormLabel>Numero del ejemplar</FormLabel>
                  </div>
                </Col>
              </Row>

              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={tatlabialEjemplar}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleTatlabial}
                    />
                    <FormLabel>Numero de tatuaje labial</FormLabel>
                  </div>
                </Col>

                <Col>
                  <div className=" mb-3 form-floating">
                    <input
                      value={precioEjemplar}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handlePrecio}
                    />
                    <FormLabel>Precio del Ejemplar</FormLabel>
                  </div>
                </Col>
              </Row>

              <Row className="align-items-center my-2">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={fecha_nacEjemplar}
                      type="date"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleFecha_nac}
                    />
                    <FormLabel>Fecha de nacimiento</FormLabel>
                  </div>
                </Col>
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={pesoEjemplar}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handlePeso}
                    />
                    <FormLabel>Peso del Ejemplar</FormLabel>
                  </div>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col className="col-6">
                  <FormGroup>
                    <FormLabel>Padre del Ejemplar</FormLabel>
                    <FormSelect onChange={handlePadre} value={padreEjemplar}>
                      <option key={1} disabled={togglePapas}>
                        Padre del ejemplar
                      </option>
                      {ejemplares.data.map(
                        (ejemplar) =>
                          ejemplar.sexo_ejemplar == "m" && (
                            <option
                              key={ejemplar.codigo_ejemplar}
                              value={ejemplar.codigo_ejemplar}
                            >
                              {ejemplar.nombre_ejemplar}
                            </option>
                          )
                      )}
                    </FormSelect>
                  </FormGroup>
                </Col>
                <Col className="col-6">
                  <FormGroup>
                    <FormLabel>Madre del Ejemplar</FormLabel>
                    <FormSelect onChange={handleMadre} value={madreEjemplar}>
                      <option key={1} disabled={toggleMamas}>
                        Madre del ejemplar
                      </option>
                      {ejemplares.data.map(
                        (ejemplar) =>
                          ejemplar.sexo_ejemplar == "f" && (
                            <option
                              key={ejemplar.codigo_ejemplar}
                              value={ejemplar.codigo_ejemplar}
                            >
                              {ejemplar.nombre_ejemplar}
                            </option>
                          )
                      )}
                    </FormSelect>
                  </FormGroup>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col>
                  <FormLabel>Imagen</FormLabel>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    onChange={handleImagen}
                  />
                </Col>
              </Row>

              <Row className="mt-2 align-content-center align-items-center">
                <Col className="col-6">
                  <FormGroup>
                    <FormLabel>Hara de procedencia</FormLabel>
                    <FormSelect onChange={handleHara} value={haraEjemplar}>
                      <option key={1} disabled={toggleHaras}>
                        Hara
                      </option>
                      {haras.data.map((hara) => (
                        <option key={hara.codigo_hara} value={hara.codigo_hara}>
                          {hara.nombre_hara}
                        </option>
                      ))}
                    </FormSelect>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel>Pelaje</FormLabel>
                    <FormSelect onChange={handlePelaje} value={pelajeEjemplar}>
                      <option key={1} disabled={togglePelaje}>
                        Pelaje
                      </option>
                      {pelajes.data.map((pelaje) => (
                        <option
                          key={pelaje.codigo_pelaje}
                          value={pelaje.codigo_pelaje}
                        >
                          {pelaje.nombre_pelaje}
                        </option>
                      ))}
                    </FormSelect>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h6 className="fw-bold mt-2" itemType="radio">
                    Genero:
                  </h6>
                  <FormCheck>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="masculino"
                      value={"m"}
                      onChange={handleGenero}
                    />
                    <label>Masculino</label>
                    <span> </span>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="femenino"
                      value={"f"}
                      onChange={handleGenero}
                    />
                    <label>Femenino</label>
                  </FormCheck>
                </Col>
              </Row>
              <Button
                className="mb-4 mt-4 align btn-success"
                size="lg"
                type="submit"
                onClick={handleData}
              >
                Confirmar cambios
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default EjemplarUpdate;
