import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

const defaultProps = {
  placeholder: "Please type here"
};

const TopicNameField = ({ value, placeholder, onChange }) => (
  <div className="field">
    <div className="control">
      <input
        className="input is-large"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

TopicNameField.propTypes = propTypes;
TopicNameField.defaultProps = defaultProps;

export default TopicNameField;
