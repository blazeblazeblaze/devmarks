import React from "react";

const TutorialItem = ({ href, name, description, free }) => (
  <a href={href} target="_blank" className="box">
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
            <strong>{name}</strong> <br />
            {description}
          </p>
        </div>
      </div>
      <div className="media-right">
        <span className="tag is-dark">{free ? "FREE" : "PAID"}</span>
      </div>
    </article>
  </a>
);

export default TutorialItem;
