import React from "react";

import Hero from "./Hero";

const Topic = ({ name, subtitle, children }) => (
  <section className="section">
    <div className="container">
      <Hero title={name} subtitle={subtitle} />
    </div>
    {children}
  </section>
);

export default Topic;
