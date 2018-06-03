import React from "react";
import { connect } from "react-redux";

import { searchTopic } from "../actions/search";
import TopicFilter from "../components/TopicFilter";

const SearchForm = props => <TopicFilter {...props} />;

export default connect(null, {
  searchTopic
})(SearchForm);
