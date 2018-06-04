import React from "react";

const TutorialItem = ({ href, name, description, free }) => (
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
            <a href={href} target="_blank">
              <strong>{name}</strong>
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

export default TutorialItem;
