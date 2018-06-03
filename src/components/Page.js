import React, { Component } from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";

const Page = class extends Component {
  render() {
    return (
      <div>
        <TopBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
};

export default Page;
