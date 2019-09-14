import React from 'react';
import './App.sass';
import Landing from './Landing'
import Plot from './Plot'
import {AlgorithmBar, AlgorithmBarProps} from './AlgorithmBar'

interface AppProps {
}

interface AppState {
  numOfBars: number
  algorithm: string
  speed: number
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      numOfBars: 100,
      algorithm: "bubblesort",
      speed: 1
    }
    this.setSpeed = this.setSpeed.bind(this);
    this.setNumOfBars = this.setNumOfBars.bind(this);
    this.setAlgorithm = this.setAlgorithm.bind(this);
  }

  setSpeed(speed: number) {
    this.setState({speed: speed});
  }

  setNumOfBars(numOfBars: number) {
    this.setState({numOfBars: numOfBars});
  }

  setAlgorithm(algorithm: string) {
    this.setState({algorithm: algorithm});
  }

  render() {
    let ABProps: AlgorithmBarProps = {
      setSpeed: this.setSpeed,
      setAlgorithm: this.setAlgorithm,
      setNumOfBars: this.setNumOfBars
    }

  return (
    <div className="main">
      <AlgorithmBar {...ABProps} />
      <div className="content-wrapper">
        <Plot numOfBars={this.state.numOfBars} 
              speed={this.state.speed} 
              algorithm={this.state.algorithm} />
      </div>
    </div>
    );
  }
}

export default App;
