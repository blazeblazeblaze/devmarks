import React from "react";
import { connect } from "react-redux";
import { bySlug } from "../reducers";

import Topic from "../components/Topic";

const TopicPage = ({ topic }) => <Topic {...topic} />;

export default connect(
  (state, { match: { params: { slug } } }) => ({
    topic: bySlug(state, slug)
  }),
  null
)(TopicPage);
