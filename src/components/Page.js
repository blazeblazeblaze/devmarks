import React from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";

import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
};

const style = {
  backgroundColor: "#fafafa"
};

const Page = ({ children }) => (
  <div style={style}>
    <TopBar />
    {children}
    <Footer />
  </div>
);

Page.propTypes = propTypes;

export default Page;
