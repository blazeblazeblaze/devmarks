import React, { Component } from "react";

const RedirectPage = class extends Component {
  componentDidMount() {
    const { newLocation } = this.props;

    this.timerHandle = setTimeout(() => {
      window.location = newLocation;
    }, 3000);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">You are being redirected...</div>
      </section>
    );
  }
};

export default RedirectPage;
