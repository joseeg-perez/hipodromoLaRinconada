import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import TablaCard from "../componentes/layout/TablaCard";
import Tabla from "../componentes/tablas/Tabla";
import EjemplarUpdate from "./EjemplarUpdate";

export const EjemplarDetail = () => {
  const params = useParams();
  console.log(params.EjemplarId);
  const match = useRouteMatch();
  const { EjemplarId } = params;

  return <div>EjemplarDetail</div>;
};
