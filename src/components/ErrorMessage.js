import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  onClick: PropTypes.func
};

const ErrorMessage = ({ onClick }) => (
  <section className="section">
    <div className="container">
      <article className="message is-large is-danger">
        <div className="message-body">
          Oops! An unexpected error occured.
          <p>
            {onClick ? (
              <a
                className="button is-rounded"
                href=""
                onClick={e => {
                  e.preventDefault();
                  onClick();
                }}
              >
                <strong>Try again</strong>
              </a>
            ) : (
              ""
            )}
          </p>
        </div>
      </article>
    </div>
  </section>
);

ErrorMessage.propTypes = propTypes;

export default ErrorMessage;
