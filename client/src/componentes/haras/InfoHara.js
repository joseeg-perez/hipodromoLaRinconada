import React, { useEffect, useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";
import axios from "axios";

const InfoHara = (props) => {
  const handleDelete = (event) => {
    console.log(props.codigo);
    axios
      .delete(`http://localhost:5000/api/v1/haras/${props.Id}`)
      .then((res) => {
        if (res.data != null) {
          alert("Se eliminó el hara con éxito");
        }
      })
      .catch((err) => console.log(err));
  };
  const [isLoading, setLoading] = useState(true);
  const [lugares, setLugares] = useState("");
  const [Estado, setEstado] = useState("");
  const [Municipio, setMunicipio] = useState("");
  const [Parroquia, setParroquia] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/lugares/listado_de_lugares")
      .then((res) => {
        // console.log(res);
        setLugares(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUbicacion = (event) => {
    setParroquia(lugares.data.find((lugar) => lugar.id_lugar == props.lugar));
    setMunicipio(
      lugares.data.find((lugar) => lugar.id_lugar == Parroquia.fk_lugar)
    );
    setEstado(
      lugares.data.find((lugar) => lugar.id_lugar == Municipio.fk_lugar)
    );
    console.log(lugares);
    console.log(Parroquia);
    console.log(Municipio);
    console.log(Estado);
  };

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Col>
      <Card className="mt-5">
        <Card.Header>
          <h2>{props.nombre}</h2>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <span className="fw-bold">Ubicación:</span>{" "}
            <span className="text-muted">
              {
                lugares.data.find((lugar) => lugar.id_lugar == props.lugar)
                  .nombre_lugar
              }
            </span>
            <div className="mt-2 text-muted"></div>
          </Card.Text>
          <Col className="text-end">
            <Link
              size="sm"
              to={`/haras/${props.Id}/updateHara`}
              className="text-center"
            >
              <Button className="btn btn-light btn-outline-success btn-sm mx-1">
                <img src={edit} alt="/" width={20} />
              </Button>
            </Link>

            <Button
              className="btn btn-light btn-outline-danger btn-sm mx-1"
              onClick={handleDelete}
            >
              <img src={trash} alt="/" width={20} />
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InfoHara;
