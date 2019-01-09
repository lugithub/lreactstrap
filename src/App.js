import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Button, Container, Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={true}>One of three columns</Col>
          <Col sm={true}>One of three columns</Col>
          <Col sm={true}>One of three columns</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
