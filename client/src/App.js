import "./App.css";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./login";
import Signup from "./signup";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </BrowserRouter>
    </div>
  );
}
//
export default App;
