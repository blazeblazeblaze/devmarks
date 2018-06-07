import React from "react";

const renderOptions = categories =>
  categories.map((category, index) => (
    <option value={category} key={index}>
      {category}
    </option>
  ));

const TopicCategoryField = ({ value, placeholder, onChange, categories }) => {
  return (
    <div className="field">
      <div className="control has-icons-left">
        <div className="select is-large">
          <select value={value} onChange={onChange}>
            <option value="">{placeholder}</option>
            {renderOptions(categories)}
          </select>
        </div>
        <span className="icon is-large is-left">
          <i className="fas fa-globe" />
        </span>
      </div>
    </div>
  );
};

export default TopicCategoryField;
