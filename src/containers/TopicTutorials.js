import React, { Component } from "react";
import { connect } from "react-redux";
import TutorialList from "../components/TutorialList";
import ErrorMessage from "../components/ErrorMessage";
import {
  fetchTutorialsIfNeeded,
  invalidateTutorials
} from "../actions/tutorials";

import DelayedComponent from "../components/DelayedComponent";
import TopicTutorialsPlaceholder from "../components/TopicTutorialsPlaceholder";

const mapStateToProps = ({ tutorials }, { slug }) => {
  const { isLoading, hasErrors, entities } = tutorials[slug] || {
    isLoading: true,
    hasErrors: false,
    entities: []
  };

  return {
    tutorials: entities,
    isLoading,
    hasErrors
  };
};

const TopicTutorials = class extends Component {
  componentDidMount() {
    const { slug } = this.props;

    this.props.fetchTutorialsIfNeeded(slug);
  }

  componentDidUpdate(nextProps) {
    this.props.fetchTutorialsIfNeeded(this.props.slug);
  }

  render() {
    const {
      tutorials,
      hasErrors,
      isLoading,
      invalidateTutorials,
      slug
    } = this.props;

    return hasErrors ? (
      <ErrorMessage
        onClick={e => {
          invalidateTutorials(slug);
        }}
      />
    ) : (
      <DelayedComponent
        isReady={!isLoading}
        fallbackComponent={<TopicTutorialsPlaceholder />}
      >
        <TutorialList tutorials={tutorials} />
      </DelayedComponent>
    );
  }
};

export default connect(mapStateToProps, {
  fetchTutorialsIfNeeded,
  invalidateTutorials
})(TopicTutorials);
