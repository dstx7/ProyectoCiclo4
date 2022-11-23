import React from "react";
import { Container, Row } from "react-bootstrap";
import "../empleados.css";
import DataGrid from "../../grid/grid";
import { request } from  "../../helper/helper";

const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "nombre",
    text: "Nombre",
  },
  {
    dataField: "apellido_p",
    text: "Primer Apellido",
  },
  {
    dataField: "apellido_m",
    text: "Segundo Apellido",
  },
  {
    dataField: "telefono",
    text: " Telefono",
  },
  {
    dataField: "mail",
    text: "Correo Electronico",
  },
  {
    dataField: "direccion",
    text: " Direccion",
  },
];


export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickEditButton = this.onClickEditButton.bind(this);

  }
  componentDidMount() {
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onClickEditButton(){
    this.props.changeTab('editar');
  }

  render() {
    return (
      <Container id="empleados-buscar-container">
        <Row>
          <h1>Buscar empleados</h1>
        </Row>
        <Row>      
          <DataGrid url="/empleados" columns={ columns } showEditButton={true}
          onClickEditButton={this.onClickEditButton}
          />
        </Row>
      </Container>
    );
  }
}
