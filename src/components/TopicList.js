import React from "react";
import PropTypes from "prop-types";
import chunk from "lodash/chunk";
import TopicItem from "./TopicItem";

const propTypes = {
  topics: PropTypes.array,
  fallbackMsg: PropTypes.string
};

const defaultProps = {
  topics: [],
  fallbackMsg: "No topics found."
};

const renderNoMatches = fallbackMsg => (
  <div className="notification">{fallbackMsg}</div>
);

const TopicList = ({ topics, fallbackMsg }) => (
  <section className="section">
    <div className="container">
      {topics.length === 0 ? renderNoMatches(fallbackMsg) : ""}

      {chunk(topics, 3).map((topicBatch, index) => {
        return (
          <div key={index} className="tile is-ancestor">
            {topicBatch.map(topic => <TopicItem key={topic.slug} {...topic} />)}
          </div>
        );
      })}
    </div>
  </section>
);

TopicList.propTypes = propTypes;
TopicList.defaultProps = defaultProps;

export default TopicList;
