import React from "react";

import TutorialItem from "./TutorialItem";

const TutorialList = ({ list }) => (
  <div className="columns">
    <div className="column is-three-quarters">
      {list.map((tutorial, index) => (
        <TutorialItem key={index} {...tutorial} />
      ))}
    </div>
    <div className="column">You might also be interested in:</div>
  </div>
);

export default TutorialList;
