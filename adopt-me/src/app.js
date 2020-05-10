import React from "react"; //importing React from our npm installation of react
import { render } from "react-dom"; //We only need render from the npm installation of react-dom
import Pet from "./Pet"; //Since we have the Pet component in another file, we are importing it here

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Oreo",
  //     animal: "Cat",
  //     breed: "Fluffy"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Roxy",
  //     animal: "Dog",
  //     breed: "Pitbull"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Lobo",
  //     animal: "Dog",
  //     breed: "German Sheppard"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Sparky",
  //     animal: "Dog",
  //     breed: "Boxer"
  //   })
  // ]);

  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Oreo" animal="Cat" breed="Fluffy" />
      <Pet name="Roxy" animal="Dog" breed="Pitbull" />
      <Pet name="Lobo" animal="Dog" breed="German Sheppard" />
      <Pet name="Sparky" animal="Dog" breed="Boxer" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
