import React from "react";
import axios from "axios";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import app from "../../app.json"
import './login.css'
import { isNull } from "util";
import Cookies from "universal-cookie";
import {calcularExpirarSesion} from "../helper/helper";       //las funciones entre corchetes
import Loading from "../loading/loading";                     //las clases se importan capitalizadas

const {APIHOST} = app;
const cookies = new Cookies();

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario:'',
      pass:'',
      
    };
  }

  iniciarSesion(){
    this.setState({ loading: true });

    axios.post(`${APIHOST}/usuarios/login`, {
      usuario: this.state.usuario,
      pass: this.state.pass,
    })
    .then((response) => {
      if(isNull(response.data.token)){
        alert("Usuario y/o contraseña Invalidos.");
      }
      else{
        cookies.set('_s',response.data.token,
        {
          path:'/',
          expires:calcularExpirarSesion()
        })

        this.props.history.push(window.open('/empleados'));
      }
      this.setState({ loading: false });

    } ) 
    .catch((err) => {
      console.log(err);
      this.setState({ loading: false });

    })  
    //alert('Botón de Iniciar Sesión');
  }
  

  render() {
    return (
      <Container id="login-container" >
        <Loading show={this.state.loading} />

        <Row>
          <Col
          sm='12'
          xs='12'
          md={{ span: 4, offset:4}}
          lg={{ span: 4, offset:4}}
          xl={{ span: 4, offset:4}}>
            <Row>
              <h2> Iniciar Sesión </h2>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control onChange={(e) => this.setState({ usuario: e.target.value})} />
                 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" onChange={(e) => this.setState({ pass: e.target.value})} />
                 
                </Form.Group>

                <Button
                  variant="primary"
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
