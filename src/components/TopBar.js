import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => (
  <nav className="navbar has-shadow is-spaced">
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <div className="icon has-text-danger">
            <i className="far fa-bookmark fa-lg" />
          </div>
        </Link>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item is-active" to="/">
            <span className="icon">
              <i className="fas fa-code" />
            </span>
            <span>Programming</span>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a
                  className="bd-tw-button is-medium button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://github.com/blazejhadzik/devmarks"
                >
                  <span className="icon">
                    <i className="fab fa-github" />
                  </span>
                  <span>Make it your own</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default TopBar;
