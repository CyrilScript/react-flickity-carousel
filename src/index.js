import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";

import "./styles.css";
import "./flickity.css";

function Carousel() {
  return (
    <Flickity>
      <img src="https://placeimg.com/640/480/animals" />
      <img src="https://placeimg.com/640/480/nature" />
      <img src="https://placeimg.com/640/480/architecture" />
    </Flickity>
  );
}

function App() {
  return (
    <div className="App">
      <h1>React Flickity</h1>
      <Carousel />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
