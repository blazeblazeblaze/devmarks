import React, { Component } from "react";

const TopicFilter = class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.topicsFilter.text || ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      value: value
    });
    this.props.onSearch(value);
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="field">
            <div className="control">
              <input
                className="input is-large"
                type="text"
                placeholder="Search for Ruby, JavaScript, ..."
                value={this.state.value}
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default TopicFilter;
