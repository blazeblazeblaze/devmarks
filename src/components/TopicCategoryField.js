import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  categories: PropTypes.array,
  disabled: PropTypes.bool
};

const defaultProps = {
  placeholder: "Select item",
  categories: [],
  disabled: false
};

const renderOptions = categories =>
  categories.map((category, index) => (
    <option value={category} key={index}>
      {category}
    </option>
  ));

const TopicCategoryField = props => {
  const { value, placeholder, onChange, categories, disabled } = props;

  return (
    <div className="field is-pulled-right">
      <div className="control has-icons-left">
        <div className="select is-large">
          <select disabled={disabled} value={value} onChange={onChange}>
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

TopicCategoryField.propTypes = propTypes;
TopicCategoryField.defaultProps = defaultProps;

export default TopicCategoryField;
