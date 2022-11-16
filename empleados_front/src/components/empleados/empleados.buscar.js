import React from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../helper/helper";
import "./empleados.buscar.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import { Route } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "tito",
    price: 1000,
  },
  {
    id: 2,
    name: "henry",
    price: 99999999,
  },
  {
    id: 3,
    name: "yo",
    price: 0.0,
  },
  {
    id: 4,
    name: "tito",
    price: 1000,
  },
  {
    id: 5,
    name: "tito",
    price: 1000,
  },
  {
    id: 6,
    name: "tito",
    price: 1000,
  },
  {
    id: 7,
    name: "henry",
    price: 99999999,
  },
  {
    id: 8,
    name: "yo",
    price: 0.0,
  },
  {
    id: 9,
    name: "tito",
    price: 1000,
  },
  {
    id: 10,
    name: "tito",
    price: 1000,
  },
  {
    id: 10,
    name: "tito",
    price: 1000,
  },
];
const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];

export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    request
      .get("/empleados")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const options = {
      custom: true,
      totalSize: products.length,
    };

    return (
      <Container id="empleados-buscar-container">
        <Row>
          <h1>Buscar Empleados</h1>
        </Row>
        <Route>
          <PaginationProvider pagination={paginationFactory(options)}>
            {({ paginationProps, paginationTableProps }) => (
              <div>
                <PaginationListStandalone {...paginationProps} />
                <BootstrapTable
                  keyField="id"
                  data={products}
                  columns={columns}
                  {...paginationTableProps}
                />
              </div>
            )}
          </PaginationProvider>
        </Route>
      </Container>
    );
  }
}
