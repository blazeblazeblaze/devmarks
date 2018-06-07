import React from "react";
import TopicList from "./TopicList";
import TopicFilters from "./TopicFilters";
import Hero from "./Hero";
import LoadingSection from "./LoadingSection";

const Home = props => {
  const { topics, onSearch, topicsFilter, categories, isLoading } = props;
  return (
    <div>
      <Hero
        title="Browse Courses & Tutorials"
        subtitle="simply type the phrase below"
      />
      <TopicFilters
        topicsFilter={topicsFilter}
        onSearch={onSearch}
        categories={categories}
      />
      {isLoading ? <LoadingSection /> : <TopicList topics={topics} />}
    </div>
  );
};

export default Home;
