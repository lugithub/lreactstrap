import React, { Component } from "react";
import logo from "./logo.svg";
import myimage from "./download.svg";
import "./App.scss";
import { Button, Container, Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="media">
        <img className="mr-3" src={myimage} alt="Generic placeholder" />
        <div className="media-body">
          <h5 className="mt-0">Media heading</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </div>
    );
  }
}

export default App;
