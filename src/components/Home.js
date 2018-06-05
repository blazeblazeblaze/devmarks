import React from "react";
import TopicList from "./TopicList";
import TopicFilter from "./TopicFilter";
import Hero from "./Hero";

const Home = ({ topics, onSearch, topicsFilter }) => (
  <div>
    <Hero
      title="Browse Courses & Tutorials"
      subtitle="simply type the phrase below"
    />
    <TopicFilter topicsFilter={topicsFilter} onSearch={onSearch} />
    <TopicList topics={topics} />
  </div>
);

export default Home;
