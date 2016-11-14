import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Scatterplot from './Scatterplot';

const styles = {
  width   : 500,
  height  : 300,
  padding : 30,
};

// The number of data points for the chart.
const numDataPoints = 50;

// A function that returns a random number from 0 to 1000
const randomNum     = () => Math.floor(Math.random() * 1000);

// A function that creates an array of 50 elements of (x, y) coordinates.
const randomDataSet = () => {
  return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.randomizeData = this.randomizeData.bind(this)
    this.state = {
      data: randomDataSet()
    }
  }

  randomizeData() {
    this.setState({
      data: randomDataSet()
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>d3-scatterplot</h2>
        </div>

        <Scatterplot {...this.state} {...styles} />

        <div className='controls'>
          <button className='btn randomize' onClick={this.randomizeData}>
            Randomize Data
          </button>
        </div>
      </div>
    );
  }
}

