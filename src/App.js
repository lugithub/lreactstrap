import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Button, Container, Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container className="outline-r">
        <div class="row">
          <div class="col-12 col-md-8">.col-12 .col-md-8</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>

        <div class="row">
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>

        <div class="row">
          <div class="col-6">.col-6</div>
          <div class="col-6">.col-6</div>
        </div>
      </Container>
    );
  }
}

export default App;
