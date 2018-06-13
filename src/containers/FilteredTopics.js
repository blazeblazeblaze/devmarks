import React, { Component } from "react";
import { connect } from "react-redux";
import TopicList from "../components/TopicList";

import { fetchTopicsIfNeeded, invalidateTopics } from "../actions/topics";
import { filteredTopics } from "../reducers";

import DelayedComponent from "../components/DelayedComponent";
import TopicListPlaceholder from "../components/TopicListPlaceholder";
import ErrorMessage from "../components/ErrorMessage";

const mapStateToProps = ({ topics, filters }) => ({
  topics: filteredTopics(topics, filters.topicsFilter),
  isLoading: topics.status.isLoading,
  hasErrors: topics.status.hasErrors,
  didInvalidate: topics.status.didInvalidate
});

const FilteredTopics = class extends Component {
  componentDidMount() {
    this.props.fetchTopicsIfNeeded();
  }

  componentDidUpdate() {
    if (this.props.didInvalidate) {
      this.props.fetchTopicsIfNeeded();
    }
  }

  render() {
    const { topics, isLoading, hasErrors, invalidateTopics } = this.props;

    return hasErrors ? (
      <ErrorMessage onClick={invalidateTopics} />
    ) : (
      <DelayedComponent
        isReady={!isLoading}
        fallbackComponent={<TopicListPlaceholder />}
      >
        <TopicList topics={topics} />
      </DelayedComponent>
    );
  }
};

export default connect(mapStateToProps, {
  fetchTopicsIfNeeded,
  invalidateTopics
})(FilteredTopics);
