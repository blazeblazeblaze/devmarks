import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  free: PropTypes.bool.isRequired
};

const TutorialItem = ({ href, title, description, free }) => (
  <div className="box is-marginless	is-radiusless">
    <article className="media">
      <figure className="media-left">
        <button className="button is-large">
          <span className="icon is-medium">
            <i className="fas fa-thumbs-up" />
          </span>
        </button>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <strong>{title}</strong>
            </a>{" "}
            <br />
            {description}
          </p>
        </div>
      </div>
      <div className="media-right">
        <span className="tag is-dark">{free ? "FREE" : "PAID"}</span>
      </div>
    </article>
  </div>
);

TutorialItem.propTypes = propTypes;

export default TutorialItem;
