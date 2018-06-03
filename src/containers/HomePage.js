import React from "react";
import { connect } from "react-redux";

import TopicList from "../components/TopicList";

const HomePage = props => <TopicList {...props} />;

export default connect(
  state => ({
    topics: state.topics
  }),
  dispatch => ({})
)(HomePage);
