import React from "react";
import TopicList from "./TopicList";
import TopicFilter from "./TopicFilter";
import Hero from "./Hero";

const Home = ({ topics, onSearch }) => (
  <div>
    <Hero
      title="Browse Courses & Tutorials"
      subtitle="simply type the phrase below"
    />
    <TopicFilter onSearch={onSearch} />
    <TopicList topics={topics} />
  </div>
);

export default Home;
