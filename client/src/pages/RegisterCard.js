import React, { useState } from "react";
import { Button, Card, Container, Form, FormLabel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import fotito from "../assets/gear.svg";
import axios from "axios";

const RegisterCard = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleusername = (event) => {
    event.preventDefault();
    setusername(event.target.value);
  };
  const handlepassword = (event) => {
    event.preventDefault();
    setpassword(event.target.value);
  };
  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/auth/registrarse", {
        username,
        password,
      });
    } catch (error) {
      throw error;
    }
    console.warn(username, password);
    setusername("");
    setpassword("");
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
                value={username}
                type="username"
                className="form-control"
                placeholder="Enter username"
                onChange={handleusername}
              />
              <FormLabel>username</FormLabel>
            </div>
            <div className="mb-3 form-floating">
              <input
                value={password}
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={handlepassword}
              />
              <FormLabel>password</FormLabel>
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
