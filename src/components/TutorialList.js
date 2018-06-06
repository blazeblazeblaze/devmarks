import React from "react";

import TutorialItem from "./TutorialItem";

const TutorialList = ({ list }) => (
  <section className="section">
    <div className="container">
      {list.map((tutorial, index) => (
        <TutorialItem key={index} {...tutorial} />
      ))}
    </div>
  </section>
);

export default TutorialList;
