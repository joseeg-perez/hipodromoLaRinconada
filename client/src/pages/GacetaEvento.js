import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Participacion from "../componentes/gaceta/Participacion";

const GacetaEvento = () => {
  const location = useLocation();
  const {
    props: { id, fecha },
  } = location.state;

  const [isLoading, setLoading] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [isLoading3, setLoading3] = useState(true);
  const [isLoading4, setLoading4] = useState(true);
  const [isLoading5, setLoading5] = useState(true);
  const [isLoading6, setLoading6] = useState(true);
  const [isLoading7, setLoading7] = useState(true);
  const [isLoading8, setLoading8] = useState(true);
  const [carreras, setCarreras] = useState([]);
  const [infoPrincipal, setInfoPrincipal] = useState([]);
  const [implementos, setImplementos] = useState([]);
  const [medicamentos, setMedicamentos] = useState([]);
  const [infoCarrerasPasadas, setInfoCarrerasPasadas] = useState([]);
  const [infoEstadisticas, setInfoEstadisticas] = useState([]);
  const [infoCombo, setInfoCombo] = useState([]);
  const [infoProduccion, setInfoProduccion] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/gaceta/query1/${id}`)
      .then((res) => {
        console.log(res);
        setCarreras(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:5000/api/v1/gaceta/query2/${id}`)
      .then((res) => {
        console.log(res);
        setInfoPrincipal(res.data);
        setLoading2(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:5000/api/v1/gaceta/query3/${id}`)
      .then((res) => {
        console.log(res);
        setImplementos(res.data);
        setLoading3(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:5000/api/v1/gaceta/query4/${id}`)
      .then((res) => {
        console.log(res);
        setMedicamentos(res.data);
        setLoading4(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:5000/api/v1/gaceta/query5/${id}`)
      .then((res) => {
        console.log(res);
        setInfoCarrerasPasadas(res.data);
        setLoading5(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:5000/api/v1/gaceta/query6/${id}`)
      .then((res) => {
        console.log(res);
        setInfoEstadisticas(res.data);
        setLoading6(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:5000/api/v1/gaceta/query7/${id}`)
      .then((res) => {
        console.log(res);
        setInfoCombo(res.data);
        setLoading7(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:5000/api/v1/gaceta/query8/${id}`)
      .then((res) => {
        console.log(res);
        setInfoProduccion(res.data);
        setLoading8(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (
    isLoading ||
    isLoading2 ||
    isLoading3 ||
    isLoading4 ||
    isLoading5 ||
    isLoading6 ||
    isLoading7 ||
    isLoading8
  )
    return <div>Cargando</div>;

  // console.log(carreras);
  //console.log(infoPrincipal);
  // console.log(implementos);
  console.log(medicamentos);
  // console.log(infoCarrerasPasadas);
  //console.log(infoEstadisticas);
  //console.log(infoCombo);
  //console.log(infoProduccion);
  let gaceta = [];
  //carreras.data.map((x) => gaceta.push([x]));

  for (let index = 0; index < carreras.data.length; index++) {
    carreras.data[index] = {
      ...carreras.data[index],
      participaciones: [],
    };
  }
  carreras.data.map((x) => gaceta.push(x));

  for (let index = 0; index < infoPrincipal.data.length; index++) {
    infoPrincipal.data[index] = {
      ...infoPrincipal.data[index],
      carrerasPasadas: [],
      promedio_posicion: null,
      promedio_sr: null,
      mejor_sr: null,
      porcentaje: null,
      produccion: null,
      medicamentos: [],
      implementos: [],
    };
  }

  for (let index = 0; index < infoPrincipal.data.length; index++) {
    //gaceta[0][1][0]={...gaceta[0][1][0],stoy:[5,5]};
    infoCarrerasPasadas.data.map((x) =>
      x.codigo_ejemplar == infoPrincipal.data[index].codigo_ejemplar ? (
        infoPrincipal.data[index].carrerasPasadas.push(x)
      ) : (
        <p></p>
      )
    );

    infoEstadisticas.data.map((x) =>
      x.codigo_ejemplar == infoPrincipal.data[index].codigo_ejemplar ? (
        ((infoPrincipal.data[index].promedio_posicion =( x.avg*1).toFixed(2)),
        (infoPrincipal.data[index].promedio_sr = (x.promedio*1).toFixed(2)),
        (infoPrincipal.data[index].mejor_sr = x.mejor))
      ) : (
        <p></p>
      )
    );

    infoCombo.data.map((x) =>
      x.codigo_ejemplar == infoPrincipal.data[index].codigo_ejemplar ? (
        (infoPrincipal.data[index].porcentaje =
          ((x.ganadas / infoPrincipal.data[index].participaciones) * 100).toFixed(2))
      ) : (
        <p></p>
      )
    );

    infoProduccion.data.map((x) =>
      x.codigo_ejemplar == infoPrincipal.data[index].codigo_ejemplar ? (
        (infoPrincipal.data[index].produccion = x.produccion)
      ) : (
        <p></p>
      )
    );

    implementos.data.map((x) =>
      x.codigo_participacion ==
      infoPrincipal.data[index].codigo_participacion ? (
        infoPrincipal.data[index].implementos.push(x)
      ) : (
        <p></p>
      )
    );

    medicamentos.data.map((x) =>
      x.codigo_participacion ==
      infoPrincipal.data[index].codigo_participacion ? (
        infoPrincipal.data[index].medicamentos.push(x)
      ) : (
        <p></p>
      )
    );
  }

  for (let index = 0; index < gaceta.length; index++) {
    let aux = index;

    // console.log(gaceta[index][index].codigo_carrera)
    //let info;
    // infoPrincipal.data.map((x) =>
    //   x.fk_carrera == gaceta[index][0].codigo_carrera
    //     ? gaceta[index].push([x])
    //     : console.log("no")
    // );

    infoPrincipal.data.map((x) =>
      x.fk_carrera == gaceta[index].codigo_carrera ? (
        gaceta[index].participaciones.push(x)
      ) : (
        <p></p>
      )
    );
  }
  //console.log(gaceta[0][1][0].codigo_participacion);
  // console.log(gaceta[0][1][0]);
  //gaceta[0][1][0]={...gaceta[0][1][0],stoy:[5,5]};
  console.log(gaceta);
  console.log(gaceta[0].participaciones[6].madre);
  if (gaceta[0].participaciones[6].madre) {
    console.log("hola");
  }
  //gaceta[0]=[...gaceta[0],5]

  return (
    <Container>
      <Row className="text-center mb-3">
        <h1>{`EVENTO DEL ${fecha}`}</h1>
      </Row>

      <Row>
        {gaceta.map((x) => (
          <Row>
            <Col className="col-auto">
              <h4>{`CARRERA Nro: ${x.numero_carrera} DEL DIA`}</h4>
            </Col>
            <Card className="mb-4">
              <Card.Header>
                <Row>
                  <Col className="col-auto">
                    <h4>{`NOMBRE: ${x.nombre_carrera.toUpperCase()}`}</h4>
                  </Col>
                </Row>

                <Row>
                  <Col className="col-auto">
                    <h4>{`HORA: ${x.hora_carrera}`}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-auto">
                    <h4>{`DISTANCIA: ${x.valor_regla}mts`}</h4>
                  </Col>
                </Row>
                <Row className="row row-cols-6">
                  <Col className="col-auto">
                    <h4>{`PREMIOS: `}</h4>
                  </Col>

                  <Col className="col-auto">
                    <h4>{`1ro: ${x.premio_primero}$`}</h4>
                  </Col>
                  <Col className="col-auto">
                    <h4>{`2do: ${x.premio_segundo}$`}</h4>
                  </Col>
                  <Col className="col-auto">
                    <h4>{`3ro: ${x.premio_tercero}$`}</h4>
                  </Col>
                  <Col className="col-auto">
                    <h4>{`4to: ${x.premio_cuarto}$`}</h4>
                  </Col>
                  <Col className="col-auto">
                    <h4>{`5to: ${x.premio_quinto}$`}</h4>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <ul className="list-group list-group-flush">
                  {/* <li className="list-group-item">CREAR ROLES</li>
                <li className="list-group-item">CONSULTAR USUARIOS</li> */}

                  {x.participaciones.map((x) => (
                    <Row className="list-group-item d-flex justify-content-center row row-cols-4">
                      <Participacion
                       
                        parti={x}
                      ></Participacion>
                    </Row>
                  ))}
                </ul>
              </Card.Body>
              
            </Card>
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default GacetaEvento;
