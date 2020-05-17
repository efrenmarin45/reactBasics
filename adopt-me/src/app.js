import React from "react"; //importing React from our npm installation of react
import { render } from "react-dom"; //We only need render from the npm installation of react-dom
import SearchParams from "./searchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
