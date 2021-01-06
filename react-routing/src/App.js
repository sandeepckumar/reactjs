import React from "react";
import { Home, About, Users } from "./components/index";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hello from the React App</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Switch>
            <Router path="/" component={About} />
            <Router path="/users" component={Users} />
            <Router path="/about" render={() => <Home />} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
