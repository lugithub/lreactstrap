import React, { Component } from "react";
import logo from "./logo.svg";
import myimage from "./download.svg";
import "./App.scss";
import { Button, Container, Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div>
        <ul class="list-unstyled">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>
            Nulla volutpat aliquam velit
            <ul class="list-unstyled">
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ul>
      </div>
    );
  }
}

export default App;
