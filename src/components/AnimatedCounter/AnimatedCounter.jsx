import React, { Component } from "react";

export default class AnimatedCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.target - 100
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
    }, 16.72);
  }

  render() {
    return <React.Fragment>{this.state.counter}&nbsp;</React.Fragment>;
  }
}
