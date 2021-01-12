import React from "react";
import { About, Home, User, Test } from "./components";
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
