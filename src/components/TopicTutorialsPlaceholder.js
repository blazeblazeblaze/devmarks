import React from "react";
import ContentLoader from "react-content-loader";

const TopicTutorialsPlaceholder = props => (
  <section className="section">
    <div className="container">
      <ContentLoader
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="0" rx="0" ry="0" width="400" height="25" />
        <rect x="0" y="35" rx="0" ry="0" width="400" height="25" />
        <rect x="0" y="70" rx="0" ry="0" width="400" height="25" />
      </ContentLoader>
    </div>
  </section>
);

export default TopicTutorialsPlaceholder;
