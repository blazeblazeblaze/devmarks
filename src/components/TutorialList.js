import React from "react";
import PropTypes from "prop-types";

import TutorialItem from "./TutorialItem";

const propTypes = {
  tutorials: PropTypes.array
};

const defaultProps = {
  tutorials: []
};

const NoTutorialsAvailable = () => (
  <div className="notification">No tutorials available.</div>
);

const TutorialList = ({ tutorials }) => (
  <section className="section">
    <div className="container">
      {tutorials.length === 0 ? <NoTutorialsAvailable /> : ""}
      {tutorials.map((tutorial, index) => (
        <TutorialItem key={index} {...tutorial} />
      ))}
    </div>
  </section>
);

TutorialList.propTypes = propTypes;
TutorialList.defaultProps = defaultProps;

export default TutorialList;
