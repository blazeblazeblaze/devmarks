import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopicItem extends Component {
  render() {
    const { name, slug, items, subtitle } = this.props;
    return (
      <Link className="tile is-parent" to={`/topics/${slug}`}>
        <article className="tile is-child box">
          <p className="title">{name}</p>
          <p className="subtitle">{subtitle}</p>
          <span className="tag">{items.length} resource(s)</span>
        </article>
      </Link>
    );
  }
}

export default TopicItem;
