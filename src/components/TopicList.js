import React from "react";
import chunk from "lodash/chunk";
import TopicItem from "./TopicItem";

const renderNoMatches = () => (
  <div className="notification">
    No topics found. Try with different search criteria.
  </div>
);

const TopicList = ({ topics }) => (
  <section className="section">
    <div className="container">
      {topics.length === 0 ? renderNoMatches() : ""}
      {chunk(topics, 3).map((group, index) => {
        return (
          <div key={index} className="tile is-ancestor">
            {group.map(({ uuid, ...properties }) => (
              <TopicItem key={uuid} {...properties} />
            ))}
          </div>
        );
      })}
    </div>
  </section>
);

export default TopicList;
