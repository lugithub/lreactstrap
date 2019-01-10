import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Button, Container, Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container className="outline-r">
        <div class="row">
          <div class="col-sm-9">
            Level 1: .col-sm-9
            <div class="row">
              <div class="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
              <div class="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
            </div>
          </div>
          <div class="col-sm-1">
            a
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
