import React from "react"; //importing React from our npm installation of react
import { render } from "react-dom"; //We only need render from the npm installation of react-dom
import { Router, Link } from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
