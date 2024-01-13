import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  const inlineStyle = {
    fontSize: "25px",
    color: "white",
  };

  return (
    <div style={{ fontSize: "25px", fontFamily: "sans-serif" }}>
      <nav className="navbar navbar-expand-lg bg-black pt-3 pb-3 mt-2">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" style={inlineStyle}>
            Weather App <FontAwesomeIcon icon={faCloud} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <form className="navbar-form ms-auto"></form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: "white" }}>
                  Home <FontAwesomeIcon icon={faHome} />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/weather"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Weather <FontAwesomeIcon icon={faCloud} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
