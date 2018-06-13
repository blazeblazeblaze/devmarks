import React from "react";
import ContentLoader from "react-content-loader";

const TopicListPlaceholder = props => (
  <section className="section">
    <div className="container">
      <ContentLoader
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="0" rx="0" ry="0" width="125" height="30" />
        <rect x="0" y="45" rx="0" ry="0" width="125" height="30" />
        <rect x="140" y="0" rx="0" ry="0" width="125" height="30" />
        <rect x="280" y="0" rx="0" ry="0" width="125" height="30" />
        <rect x="140" y="45" rx="0" ry="0" width="125" height="30" />
        <rect x="280" y="45" rx="0" ry="0" width="125" height="30" />
      </ContentLoader>
    </div>
  </section>
);
export default TopicListPlaceholder;
