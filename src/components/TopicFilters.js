import React, { Component } from "react";
import PropTypes from "prop-types";
import TopicNameField from "./TopicNameField";
import TopicCategoryField from "./TopicCategoryField";

const propTypes = {
  onSearch: PropTypes.func.isRequired,
  topicsFilter: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  categories: PropTypes.array
};

const defaultProps = {
  isLoading: false,
  categories: []
};

const TopicFilters = class extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, value) {
    this.props.onSearch({
      [key]: {
        value
      }
    });
  }

  render() {
    const { topicsFilter, categories, isLoading } = this.props;

    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <TopicNameField
                value={topicsFilter.name.value}
                onChange={e => this.handleChange("name", e.target.value)}
                placeholder="Search for Ruby, Docker..."
              />
            </div>
            <div className="column is-one-third">
              <TopicCategoryField
                disabled={isLoading}
                value={topicsFilter.category.value}
                onChange={e => this.handleChange("category", e.target.value)}
                categories={categories}
                placeholder="Select category"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
};

TopicFilters.propTypes = propTypes;
TopicFilters.defaultProps = defaultProps;

export default TopicFilters;
