import Home from "./pages/Home";
import Test from "./pages/App";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <h1>React Boilerplate</h1>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
