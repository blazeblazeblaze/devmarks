import React, { Component } from "react";

import TopicNameField from "./TopicNameField";
import TopicCategoryField from "./TopicCategoryField";

const TopicFilters = class extends Component {
  constructor(props) {
    super(props);

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(key, value) {
    this.props.onSearch({
      [key]: {
        value
      }
    });
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <TopicNameField
                value={this.props.topicsFilter.name.value}
                onChange={e => this.onValueChange("name", e.target.value)}
                placeholder="Search for Ruby, JavaScript, ..."
              />
            </div>
            <div className="column is-one-quarter">
              <TopicCategoryField
                categories={this.props.categories}
                value={this.props.topicsFilter.category.value}
                onChange={e => this.onValueChange("category", e.target.value)}
                placeholder="Select Category"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default TopicFilters;
