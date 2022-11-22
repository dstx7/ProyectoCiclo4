import React from "react";
import { Container, Row, Button, Form } from "react-bootstrap";
import "../empleados.css";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";

export default class EmpleadosCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      empleado: {
        nombre: "",
        apellido_p: "",
        apellido_m: "",
        telefono: "",
        mail: "",
        direccion: "",
      },
    };
  }
  setValue(inicioe, value) {
    this.setState({
      empleado: {
        ...this.state.empleado,
        [inicioe]: value,
      },
    });
  }

  guardarEmpleados(){
    this.setState({ loading: true});
    request
    .post('/empleados',this.state.empleado)
    .then((response) => { 
      if (response.data.exito){
        this.props.changeTab('buscar')
      }
      this.setState({ loading: false});
    })
    .catch((err) => {
      console.error(err);
      this.setState({ loading: true});
    });
  }

  render() {
    return (
      <Container id="empleados-crear-container">
        <Loading show={this.state.loading} />
        <Row>
          <h1> Crear Empleados</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
              onChange={(e) => this.setValue('nombre', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
              onChange={(e) => this.setValue('apellido_p', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control
              onChange={(e) => this.setValue('apellido_m', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
              onChange={(e) => this.setValue('telefono', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
              type="email"
              onChange={(e) => this.setValue('mail', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
              onChange={(e) => this.setValue('direccion', e.target.value)}
              />
            </Form.Group>
           
            <Button variant="primary"
            onClick={() => console.log(this.guardarEmpleados())}
            >
              Guardar Empleado
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
