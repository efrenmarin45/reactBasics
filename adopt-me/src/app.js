import React, { useState } from "react"; //importing React from our npm installation of react
import { render } from "react-dom"; //We only need render from the npm installation of react-dom
import { Router, Link } from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const ThemeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={ThemeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
