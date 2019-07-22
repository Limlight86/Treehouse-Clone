import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home, About, Teachers, Courses } from "./pages";
import { Navigation } from "./components";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </div>
  </BrowserRouter>
);

export default App;
