import React, { useState } from "react";
import { Button, Card, Container, Form, FormLabel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import fotito from "../assets/gear.svg";
import axios from "axios";

const RegisterCard = () => {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handleContrasena = (event) => {
    event.preventDefault();
    setContrasena(event.target.value);
  };
  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/auth/registrarse", {
        email,
        contrasena,
      });
    } catch (error) {
      throw error;
    }
    console.warn(email, contrasena);
    setEmail("");
    setContrasena("");
  };
  return (
    <Container>
      <Card className="mt-5 mx-5">
        <Card.Header>
          <h3>Registrarse</h3>
        </Card.Header>
        <Card.Body>
          <Form className="form-floating m-3">
            <div className="mb-3 form-floating">
              <input
                value={email}
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={handleEmail}
              />
              <FormLabel>Email</FormLabel>
            </div>
            <div className="mb-3 form-floating">
              <input
                value={contrasena}
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={handleContrasena}
              />
              <FormLabel>Contrasena</FormLabel>
            </div>
            <div className="d-grid">
              <Button
                type="submit"
                className="btn btn-primary"
                onClick={handleData}
              >
                Registrar
              </Button>
            </div>
            <p className="forgot-password text-right">
              Ya tienes una cuenta,{" "}
              <NavLink href="/perfil" to="/perfil">
                inicia sesion
              </NavLink>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegisterCard;
