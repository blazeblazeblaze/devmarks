import React, { Component } from "react";
import { connect } from "react-redux";
import TopicList from "../components/TopicList";

import { fetchTopicsIfNeeded, invalidateTopics } from "../actions/topics";
import ErrorMessage from "../components/ErrorMessage";
import DelayedComponent from "../components/DelayedComponent";
import TopicListPlaceholder from "../components/TopicListPlaceholder";

const recommendedTopics = (topics, topic) => {
  const { category, slug } = topic || {
    category: null,
    slug: null
  };

  if (category == null || slug == null) {
    return [];
  }

  return topics
    .filter(topic => topic.category === category)
    .filter(topic => topic.tutorialsCount > 0)
    .filter(topic => topic.slug !== slug)
    .slice(0, 3);
};

const mapStateToProps = ({ topics }, ownProps) => ({
  topics: recommendedTopics(topics.entities, ownProps.topic),
  isLoading: topics.status.isLoading,
  hasErrors: topics.status.hasErrors,
  didInvalidate: topics.status.didInvalidate
});

const RecommendedTopicsPage = class extends Component {
  componentDidMount() {
    this.props.fetchTopicsIfNeeded();
  }

  componentDidUpdate() {
    if (this.props.didInvalidate) {
      this.props.fetchTopicsIfNeeded();
    }
  }

  render() {
    const { isLoading, hasErrors, topics, invalidateTopics } = this.props;

    return hasErrors ? (
      <ErrorMessage onClick={invalidateTopics} />
    ) : (
      <DelayedComponent
        isReady={!isLoading}
        fallbackComponent={<TopicListPlaceholder />}
      >
        <TopicList
          topics={topics}
          fallbackMsg="No matching recommendations found."
        />
      </DelayedComponent>
    );
  }
};

export default connect(mapStateToProps, {
  fetchTopicsIfNeeded,
  invalidateTopics
})(RecommendedTopicsPage);
