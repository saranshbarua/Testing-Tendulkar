import React, { Component } from "react";
import "./dashboard.css";
import * as Recharts from "recharts";

export default class Dashboard extends Component {
  render() {
    const {
      LineChart,
      Line,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      Legend
    } = Recharts;

    return <div>Stats</div>;
  }
}
