import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Developers
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Table
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Add Developer
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;