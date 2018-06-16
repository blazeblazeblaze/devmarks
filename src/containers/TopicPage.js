import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchTopicDetailsIfNeeded,
  invalidateTopicDetails
} from "../actions/topic";
import Topic from "../components/Topic";

const TopicPage = class extends Component {
  componentDidMount() {
    const { slug } = this.props;
    this.props.fetchTopicDetailsIfNeeded(slug);
  }
  render() {
    return <Topic {...this.props} />;
  }
};

const mapStateToProps = ({ topics }, ownProps) => {
  const currentSlug = ownProps.match.params.slug;
  const topic = topics.topicDetails[currentSlug];

  return {
    topic: topic && topic.payload,
    slug: currentSlug
  };
};

export default connect(mapStateToProps, {
  fetchTopicDetailsIfNeeded,
  invalidateTopicDetails
})(TopicPage);
