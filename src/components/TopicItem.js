import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tutorialsCount: PropTypes.number.isRequired
};

const TopicItem = ({ title, slug, tutorialsCount }) => (
  <Link className="tile is-4 is-parent" to={`/topics/${slug}`}>
    <article className="tile is-child box">
      <div className="columns">
        <div className="column">
          <p className="title">{title}</p>
        </div>
        <div className="column">
          <span className="button is-medium is-pulled-right">
            <span className="icon">{tutorialsCount}</span>
          </span>
        </div>
      </div>
    </article>
  </Link>
);

TopicItem.propTypes = propTypes;

export default TopicItem;
