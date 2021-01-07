import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import DevelopersList from "./components/developers-list.component";
import EditDeveloper from "./components/edit-developers.component";
import AddDeveloper from "./components/create-developers.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={DevelopersList} />
        <Route path="/edit/:id" component={EditDeveloper} />
        <Route path="/create" component={AddDeveloper} />
      </div>
    </Router>
  );
}

export default App;
