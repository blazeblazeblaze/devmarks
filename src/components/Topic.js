import React from "react";

import Hero from "./Hero";
import TutorialList from "./TutorialList";

const Topic = ({ name, subtitle, items, ...rest }) => (
  <section className="section">
    <div className="container">
      <Hero title={name} subtitle={subtitle} />
    </div>
    <div className="container">
      <TutorialList list={items} />
    </div>
  </section>
);

export default Topic;
