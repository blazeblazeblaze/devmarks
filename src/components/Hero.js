import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

const Hero = ({ title, subtitle }) => (
  <section className="hero">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    </div>
  </section>
);

Hero.propTypes = propTypes;

export default Hero;
