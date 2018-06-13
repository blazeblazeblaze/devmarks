import React from "react";
import FilteredTopics from "../containers/FilteredTopics";
import TopicFiltersForm from "../containers/TopicFiltersForm";
import Hero from "./Hero";

const HomePage = () => (
  <div>
    <Hero title="Browse Courses & Tutorials" subtitle="Type any phrase below" />
    <TopicFiltersForm />
    <FilteredTopics />
  </div>
);

export default HomePage;
