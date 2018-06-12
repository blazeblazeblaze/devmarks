import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  isReady: PropTypes.bool.isRequired,
  fallbackComponent: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired
};

const DelayedComponent = ({ isReady, fallbackComponent, children }) => (
  <div>{isReady ? children : fallbackComponent}</div>
);

DelayedComponent.propTypes = propTypes;

export default DelayedComponent;
