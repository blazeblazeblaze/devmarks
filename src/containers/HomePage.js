import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "../components/Home";
import { filterTopics } from "../actions/filters";
import { getTopics } from "../actions/topics";
import { visibleTopics } from "../reducers";

const HomePage = class extends Component {
  componentDidMount() {
    this.props.requestTopics();
  }

  render() {
    return <Home {...this.props} />;
  }
};

const availableCategories = topicsState => {
  return [...new Set(topicsState.entities.map(topic => topic.category))];
};

export default connect(
  ({ topics, filters }) => ({
    isLoading: topics.isLoading,
    topics: visibleTopics(topics, filters.topicsFilter),
    categories: availableCategories(topics),
    topicsFilter: filters.topicsFilter
  }),
  {
    onSearch: filterTopics,
    requestTopics: getTopics
  }
)(HomePage);
