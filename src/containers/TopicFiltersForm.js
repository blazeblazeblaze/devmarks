import { connect } from "react-redux";
import { filterTopics } from "../actions/filters";
import TopicFilters from "../components/TopicFilters";

const availableCategories = topics => {
  return [...new Set(topics.map(topic => topic.category))];
};

const mapStateToProps = ({ topics, filters }) => {
  return {
    categories: availableCategories(topics.entities),
    topicsFilter: filters.topicsFilter,
    isLoading: topics.status.isLoading
  };
};

export default connect(
  mapStateToProps,
  {
    onSearch: filterTopics
  }
)(TopicFilters);
