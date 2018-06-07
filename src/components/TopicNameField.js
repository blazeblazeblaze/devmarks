import React from "react";

const TopicNameField = ({ value, placeholder, onChange }) => {
  return (
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
};

export default TopicNameField;
