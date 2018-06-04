import React, { Component } from "react";
import { connect } from "react-redux";
import { bySlug } from "../reducers";

import Topic from "../components/Topic";
import TutorialList from "../components/TutorialList";

import { getTutorials } from "../actions/tutorial";

const TopicPage = class extends Component {
  componentDidMount() {
    const { topic: { slug } } = this.props;
    this.props.requestTutorials(slug);
  }
  render() {
    const { topic, tutorials } = this.props;
    return (
      <Topic {...topic}>
        <div className="container">
          <TutorialList list={tutorials} />
        </div>
      </Topic>
    );
  }
};

export default connect(
  (state, { match: { params: { slug } } }) => ({
    topic: bySlug(state, slug),
    tutorials: state.tutorials
  }),
  {
    requestTutorials: getTutorials
  }
)(TopicPage);
