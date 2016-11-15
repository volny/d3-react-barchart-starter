import React, { Component } from 'react'
import { select, axisBottom, axisLeft } from 'd3'

export default class Axes extends Component {
  constructor(props) {
    super(props)
    this.renderAxis = this.renderAxis.bind(this)
  }

  componentDidMount() {
    this.renderAxis()
  }

  componentDidUpdate() {
    this.renderAxis()
  }

  renderAxis() {
    select(this.refs.xAxis).call(
      axisBottom(this.props.xScale).ticks(5)
    )
    select(this.refs.yAxis).call(
      axisLeft(this.props.yScale).ticks(5)
    )
  }

  render() {
    return (
      <g className="axes">
        <g className="x-axis" ref="xAxis" transform={`translate(0, ${this.props.height - this.props.padding})`}/>
        <g className="y-axis" ref="yAxis" transform={`translate(${this.props.padding}, 0)`}/>
      </g>
    )
  }
}

