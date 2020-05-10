import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Oreo",
      animal: "Cat",
      breed: "Fluffy"
    }),
    React.createElement(Pet, {
      name: "Roxy",
      animal: "Dog",
      breed: "Pitbull"
    }),
    React.createElement(Pet, {
      name: "Lobo",
      animal: "Dog",
      breed: "German Sheppard"
    }),
    React.createElement(Pet, {
      name: "Sparky",
      animal: "Dog",
      breed: "Boxer"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
