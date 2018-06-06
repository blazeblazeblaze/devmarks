import React from "react";

const getSubtitle = ({ title, subtitle }) => {
  if (subtitle !== undefined || title !== undefined) {
    return subtitle || `All about ${title}`;
  }
};

const Hero = props => {
  const { title } = props;

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2>{getSubtitle(props)}</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
