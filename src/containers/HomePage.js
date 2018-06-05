import React, { Component } from "react";
import { connect } from "react-redux";

import Home from "../components/Home";
import { searchTopic } from "../actions/search";
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

export default connect(
  state => ({
    topics: visibleTopics(state.topics, state.topicsFilter.text),
    topicsFilter: state.topicsFilter
  }),
  {
    onSearch: searchTopic,
    requestTopics: getTopics
  }
)(HomePage);
