import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Button,
  FormSelect,
} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";

const InscribirEjemplar = () => {
  const location = useLocation();
  const {
    props: { id, cantidad },
  } = location.state;
  console.log(id);

  const [isLoading, setLoading] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [isLoading3, setLoading3] = useState(true);
  const [isLoading4, setLoading4] = useState(true);
  const [isLoading5, setLoading5] = useState(true);
  const [isLoading6, setLoading6] = useState(true);
  const [isLoading7, setLoading7] = useState(true);
  const [isLoading8, setLoading8] = useState(true);
  const [medicamentos, setMedicamentos] = useState([]);
  const [implementos, setImplementos] = useState([]);
  const [ejemplares, setEjemplares] = useState([]);
  const [jinetes, setJinetes] = useState([]);
  const [puestosOcupados, setPuestosOcupados] = useState([]);
  const [maxParticipantes, setMaxParticipantes] = useState([]);
  const [inscritos, setInscritos] = useState([]);
  const [generoCarrera, setGeneroCarrera] = useState([]);
  let sexoEjemplar;

  const obtenerEjemplares=async()=>{
    console.log("entro");
    let data;
    let fkCarrera=id;
    try {
      let res=await axios.post(
        "http://localhost:5000/api/v1/participaciones/listado_de_ejemplares",
        {
          sexoEjemplar,
          fkCarrera,
        }
      );
        data=res.data;
    } catch (error) {
      throw error;
    }
      
    setEjemplares(data);
    setLoading3(false);
  }
  
  useEffect(() => {
    console.log("sisa");
    axios
      .get("http://localhost:5000/api/v1/medicamentos/listado_de_medicamentos")
      .then((res) => {
        console.log(res);
        setMedicamentos(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/api/v1/implementos/listado_de_implementos")
      .then((res) => {
        console.log(res);
        setImplementos(res.data);
        setLoading2(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(
        `http://localhost:5000/api/v1/participaciones/listado_jinetes_disponibles/${id}`
      )
      .then((res) => {
        console.log(res);
        setJinetes(res.data);
        setLoading4(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(
        `http://localhost:5000/api/v1/participaciones/puestos_ocupados/${id}`
      )
      .then((res) => {
        console.log(res);
        setPuestosOcupados(res.data);
        setLoading5(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(
        `http://localhost:5000/api/v1/participaciones/cantidad_participantes_inscritos/${id}`
      )
      .then((res) => {
        console.log(res);
        setMaxParticipantes(res.data);
        setLoading6(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(
        `http://localhost:5000/api/v1/participaciones/cantidad_ejemplares_carrera/${id}`
      )
      .then((res) => {
        console.log(res);
        setInscritos(res.data);
        setLoading7(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(
        `http://localhost:5000/api/v1/participaciones/obtener_sexo_carrera/${id}`
      )
      .then((res) => {
        console.log(res);
        setGeneroCarrera(res.data);
        setLoading8(false);
        // sexoEjemplar=generoCarrera.data[0].valor_regla==1 ? "m" : "f";
        // obtenerEjemplares();
      })
      .catch((err) => console.log(err));

    // if (isLoading8) {
    //   axios
    //     .get(
    //       `http://localhost:5000/api/v1/participaciones/listado_de_ejemplares`
    //     )
    //     .then((res) => {
    //       console.log(res);
    //       setEjemplares(res.data);
    //       setLoading3(false);
    //     })
    //     .catch((err) => console.log(err));
    // }
  }, []);
  
  // if(!isLoading8){
  //   sexoEjemplar=generoCarrera.data[0].valor_regla==1 ? "m" : "f";
  //   obtenerEjemplares();
  // }
  
  if (
    isLoading ||
    isLoading2 ||
    
    isLoading4 ||
    isLoading5 ||
    isLoading6 ||
    isLoading7 ||
    isLoading8
  )
    return <div>Cargando</div>;

    if(isLoading3){
      sexoEjemplar=generoCarrera.data[0].valor_regla==1 ? "m" : "f";
      obtenerEjemplares();
      return <div>Cargando</div>;
    }

  //console.log(maxParticipantes.data[0].valor_regla);
  //console.log(inscritos.data[0].count);
  console.log(generoCarrera.data[0].valor_regla);
  console.log(ejemplares);
  if (maxParticipantes.data[0].valor_regla == inscritos.data[0].count)
    return alert("No se pueden inscribir mas ejemplares");

  // const ejemplares = [
  //   {
  //     id: "1",
  //     nombre: "Black Mamba",
  //   },
  //   {
  //     id: "2",
  //     nombre: "Black Mamba",
  //   },
  //   {
  //     id: "3",
  //     nombre: "Black Mamba",
  //   },
  //   {
  //     id: "4",
  //     nombre: "Black Mamba",
  //   },
  //   {
  //     id: "5",
  //     nombre: "Black Mamba",
  //   },
  //   {
  //     id: "6",
  //     nombre: "Black Mamba",
  //   },
  //   {
  //     id: "7",
  //     nombre: "Black Mamba",
  //   },
  //   {
  //     id: "8",
  //     nombre: "Black Mamba",
  //   },
  //   {
  //     id: "9",
  //     nombre: "Black Mamba",
  //   },
  //   {
  //     id: "10",
  //     nombre: "Black Mamba",
  //   },
  //   {
  //     id: "11",
  //     nombre: "Black Mamba",
  //   },
  //   {
  //     id: "12",
  //     nombre: "Black Mamba",
  //   },
  // ];

  // const medicamentos = [
  //   {
  //     id: "1",
  //     nombre: "Atamel",
  //   },
  //   {
  //     id: "2",
  //     nombre: "Omeprasol",
  //   },
  //   {
  //     id: "3",
  //     nombre: "Dencoru",
  //   },
  //   {
  //     id: "4",
  //     nombre: "Ranitidina",
  //   },
  //   {
  //     id: "5",
  //     nombre: "Riopan",
  //   },
  // ];

  // const implementos = [
  //   {
  //     id: "1",
  //     nombre: "Lentes",
  //   },
  //   {
  //     id: "2",
  //     nombre: "Fulete",
  //   },
  //   {
  //     id: "3",
  //     nombre: "Hoddie",
  //   },
  //   {
  //     id: "4",
  //     nombre: "Mascara",
  //   },
  //   {
  //     id: "5",
  //     nombre: "Rodillera",
  //   },
  //   {
  //     id: "6",
  //     nombre: "Canillera",
  //   },
  // ];

  // const jinetes = [
  //   {
  //     id: "1",
  //     nombre: "Oscar Isaac",
  //   },
  //   {
  //     id: "2",
  //     nombre: "Marco Gimenez",
  //   },
  //   {
  //     id: "3",
  //     nombre: "Jerry Mina",
  //   },
  // ];
  console.log(puestosOcupados.data.find((puesto) => 6 == puesto.puesto_pista));
  let content = [];
  for (let index = 0; index < 16; index++) {
    if (
      !puestosOcupados.data.find((puesto) => index + 1 == puesto.puesto_pista)
    )
      content.push(<option value={index + 1}>{index + 1}</option>);
  }

  let contenidoMedicamentos = [];
  medicamentos.data.map((x) =>
    contenidoMedicamentos.push(
      <div className="form-check col-auto">
        <input
          className="form-check-input"
          type="checkbox"
          value={x.codigo_medicamento}
          id={x.nombre_medicamento}
        ></input>
        <label className="form-check-label">{x.nombre_medicamento}</label>
      </div>
    )
  );

  let contenidoImplementos = [];
  implementos.data.map((x) =>
    contenidoImplementos.push(
      <div className="form-check col-auto">
        <input
          className="form-check-input"
          type="checkbox"
          value={x.codigo_implemento}
          id={x.codigo_implemento}
        ></input>
        <label className="form-check-label">{x.nombre_implemento}</label>
      </div>
    )
  );

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    console.log("entro");
    console.log(document.getElementById("numero").value);
    console.log(document.getElementById("ejemplar").value);
    console.log(document.getElementById("peso").value);
    /*console.log(document.getElementById("implemento").value);
    console.log(document.getElementById("medicamento").value);*/
    console.log(document.getElementById("jinete").value);
    console.log(document.getElementById("pesoJinete").value);
    console.log(document.getElementById("puesto").value);
    let medicamentoUsados = [];
    medicamentos.data.map((x) =>
      document.getElementById(x.nombre_medicamento).checked
        ? medicamentoUsados.push(x.codigo_medicamento)
        : console.log("no se usa")
    );
    let implementoUsados = [];
    implementos.data.map((x) =>
      document.getElementById(x.codigo_implemento).checked
        ? implementoUsados.push(x.codigo_implemento)
        : console.log("no se usa")
    );
    let gualdrapa = document.getElementById("numero").value;
    let fkCarrera = id;
    let pesoCaballo = document.getElementById("peso").value;
    let pesoJinete = document.getElementById("pesoJinete").value;
    let fkEjemplar = document.getElementById("ejemplar").value;
    let fkJinete = document.getElementById("jinete").value;
    //let puestoPista = document.getElementById("puesto").value;
    let puestoPista = document.getElementById("puesto").value;
    //console.log(pesoJinete)
    console.log(medicamentoUsados);
    console.log(implementoUsados);
    try {
      await axios.post(
        "http://localhost:5000/api/v1/participaciones/registrar_participacion",
        {
          gualdrapa,
          fkCarrera,
          pesoCaballo,
          pesoJinete,
          fkEjemplar,
          fkJinete,
          puestoPista,
          implementoUsados,
          medicamentoUsados,
        }
      );
    } catch (error) {
      throw error;
    }
    alert("Se ha inscrito el ejemplar con éxito");
  };

  return (
    <Container>
      <Form>
        <Row className="text-center">
          <h1>REGISTRAR EJEMPLAR EN CARRERA</h1>
        </Row>

        <Row className="mt-3">
          <Col className="justify-content-center align-items-center mx-5">
            <Card>
              <Card.Body>
                <Row className="row row-cols-4">
                  <Col className="border border-2 border-dark border-top-0 border-start-0">
                    <Row className="text-center">
                      <h4>Numero</h4>
                    </Row>

                    <Row className="d-flex justify-content-center mb-2">
                      <input
                        type="number"
                        min={1}
                        id="numero"
                        className=" form-control"
                        style={{ width: "220px" }}
                        placeholder="Numero"
                      ></input>
                    </Row>
                  </Col>

                  <Col className="border border-2 border-dark border-top-0 border-start-0">
                    <Row className="text-center">
                      <h4>Seleccionar Ejemplar</h4>
                    </Row>

                    <Row className="d-flex justify-content-center mb-2">
                      <FormSelect
                        id="ejemplar"
                        className="col-7"
                        style={{ height: "38px", width: "220px" }}
                      >
                        {ejemplares.data.map((x) => (
                          <option value={x.codigo_ejemplar}>
                            {x.nombre_ejemplar}
                          </option>
                        ))}
                      </FormSelect>
                    </Row>
                  </Col>

                  <Col className="border border-2 border-dark border-top-0 border-start-0">
                    <Row className="text-center">
                      <h4>Peso del Ejemplar</h4>
                    </Row>

                    <Row className="d-flex justify-content-center mb-2">
                      <input
                        type="number"
                        min={1}
                        id="peso"
                        className=" form-control"
                        style={{ width: "220px" }}
                        placeholder="Peso"
                      ></input>
                    </Row>
                  </Col>

                  <Col className="border border-2 border-dark border-top-0 border-start-0 border-end-0">
                    <Row className="text-center">
                      <h4>Medicamento</h4>
                    </Row>

                    <Row className="d-flex justify-content-center mb-2">
                      <Col className="">
                        <Row className="row row-cols-2 d-flex justify-content-center">
                          {contenidoMedicamentos.map((x) => (
                            <Col>{x}</Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                  </Col>

                  <Col className="border border-2 border-dark border-top-0 border-start-0">
                    <Row className="text-center">
                      <h4>Seleccionar jinete</h4>
                    </Row>

                    <Row className="d-flex justify-content-center mb-2">
                      <FormSelect
                        id="jinete"
                        className="col-7"
                        style={{ height: "38px", width: "220px" }}
                      >
                        {jinetes.data.map((x) => (
                          <option
                            value={x.codigo_persona}
                          >{`${x.nombre1_persona} ${x.apellido1_persona}`}</option>
                        ))}
                      </FormSelect>
                    </Row>
                  </Col>

                  <Col className="border border-2 border-dark border-top-0 border-start-0">
                    <Row className="text-center">
                      <h4>Peso del Jinete</h4>
                    </Row>

                    <Row className=" d-flex justify-content-center mb-2">
                      <input
                        type="number"
                        min={1}
                        id="pesoJinete"
                        className=" form-control"
                        style={{ width: "220px" }}
                        placeholder="Peso"
                      ></input>
                    </Row>
                  </Col>

                  <Col className="border border-2 border-dark border-top-0 border-start-0">
                    <Row className="text-center">
                      <h4>Puesto en pista</h4>
                    </Row>

                    <Row className="d-flex justify-content-center mb-2">
                      <FormSelect
                        id="puesto"
                        className="col-7"
                        style={{ height: "38px", width: "220px" }}
                      >
                        {content}
                      </FormSelect>
                    </Row>
                  </Col>

                  <Col className="border border-2 border-dark border-top-0 border-start-0 border-end-0">
                    <Row className="text-center">
                      <h4>Implemento</h4>
                    </Row>

                    <Row className="d-flex justify-content-center mb-2">
                      <Col className="">
                        <Row className="row row-cols-2 d-flex justify-content-center">
                          {contenidoImplementos.map((x) => (
                            <Col>{x}</Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3 d-flex justify-content-center">
          <Col className="col-auto d-flex justify-content-center">
            <Button onClick={formSubmissionHandler} size="xl">
              GUARDAR
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default InscribirEjemplar;
