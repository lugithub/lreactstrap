import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Button, Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container className="custom-class">
        <div class="bd-example-container-header" />
        <div class="bd-example-container-sidebar" />
        <div class="bd-example-container-body" />
      </Container>
    );
  }
}

export default App;
