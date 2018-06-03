import React from "react";
import TopicItem from "./TopicItem";
import SearchForm from "../containers/SearchForm";
import chunk from "lodash/chunk";
const TopicList = ({ topics }) => (
  <div>
    <SearchForm />
    <section className="section">
      <div className="container">
        {chunk(topics, 3).map((group, index) => {
          return (
            <div key={index} className="tile is-ancestor">
              {group.map(({ uuid, ...properties }) => {
                return (
                  <div key={uuid} className="tile is-parent">
                    <TopicItem {...properties} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  </div>
);

export default TopicList;
