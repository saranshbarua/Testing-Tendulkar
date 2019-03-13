import React, { Component } from "react";

export default class AnimatedCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.target - 300
    };
  }

  componentDidMount() {
    const counter = setInterval(() => {
      if (this.state.counter < this.props.target) {
        this.setState({
          counter: this.state.counter + 1
        });
      } else {
        clearInterval(counter);
      }
    }, 0);
  }

  render() {
    return <div style={{ display: "flex" }}>{this.state.counter}&nbsp;</div>;
  }
}
