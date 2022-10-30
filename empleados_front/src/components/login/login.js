import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario:'',
      pass:'',
      
    };
  }
  iniciarSesion(){
    alert('boton de iniciar sesion');
  }

  render() {
    return (
      <Container id="login-container" style={{ marginTop: 200 }}>
        <Row>
          <Col>
            <Row>
              <h2> Iniciar Sesión </h2>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ float: "left" }}>Usuario</Form.Label>
                  <Form.Control onChange={(e) => this.setState({ usuario: e.target.value})} />
                 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ float: "left" }}>Contraseña</Form.Label>
                  <Form.Control type="password" onChange={(e) => this.setState({ pass: e.target.value})} />
                 
                </Form.Group>

                <Button
                  variant="primary"
                  style={{ marginTop: 20, width: "100%" }}
                  onClick = {() => {
                    this.iniciarSesion();
                  }}
                >
                  Iniciar Sesión
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
