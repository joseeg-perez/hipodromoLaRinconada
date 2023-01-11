import React from "react";
import { Button, Card, Container, Form, FormLabel } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const RegisterCard = () => {
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
                type="text"
                className="form-control"
                placeholder="First name"
              />
              <FormLabel>Nombre</FormLabel>
            </div>
            <div className="mb-3 form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
              <FormLabel>Apellido</FormLabel>
            </div>
            <div className="mb-3 form-floating">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
              <FormLabel>Email</FormLabel>
            </div>
            <div className="mb-3 form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <FormLabel>Contrasena</FormLabel>
            </div>
            <div className="d-grid">
              <Button type="submit" className="btn btn-primary">
                Registrarse
              </Button>
            </div>
            <p className="forgot-password text-right">
              Ya estas registrado? <NavLink href="/sign-in" to="/perfil">Iniciar sesion</NavLink>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegisterCard;
