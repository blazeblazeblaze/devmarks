import React from "react";
import PropTypes from "prop-types";

import Hero from "./Hero";
import TopicTutorials from "../containers/TopicTutorials";
import RecommendedTopics from "../containers/RecommendedTopics";

const propTypes = {
  topic: PropTypes.object,
  slug: PropTypes.string.isRequired
};

const Topic = ({ topic, slug }) => (
  <div>
    <Hero title="Browse tutorials" />
    <TopicTutorials slug={slug} />
    {topic && <RecommendedTopics topic={topic} />}
  </div>
);

Topic.propTypes = propTypes;

export default Topic;
