import React, { Component } from "react";
import { connect } from "react-redux";

import Home from "../components/Home";
import { searchTopic } from "../actions/search";
import { getTopics } from "../actions/topics";

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
    topics: state.topics
  }),
  {
    onSearch: searchTopic,
    requestTopics: getTopics
  }
)(HomePage);
