import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Button, Container, Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container className="outline-r">
        <Row className="outline-g">
          <Col sm={true} className="outline-b">One of three columns</Col>
          <Col sm={true}>One of three columns</Col>
          <Col sm={5}>One of three columns</Col>
          <Col lg={true}>One of three columns</Col>
        </Row>
        <Row className="outline-g">
          <Col md={true} width={50} className="outline-b">One of three columns</Col>
          <Col md={true}>One of three columns</Col>
          <Col md={true}>One of three columns</Col>
        </Row>        
        <div>not a row</div>
      </Container>
    );
  }
}

export default App;
