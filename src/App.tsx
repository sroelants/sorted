import React from 'react';
import './App.sass';
import Landing from './Landing'
import {Plot, PlotProps} from './Plot'
import {AlgorithmBar, AlgorithmBarProps} from './AlgorithmBar'
import {Action, bubbleSort, swap} from './sort'

interface AppProps {
}

interface AppState {
  numOfBars: number
  algorithm: string
  speed: number
  active: number,
  testing: number,
  heights: number[],
  currentlySorting: boolean,
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      numOfBars: 100,
      algorithm: "bubblesort",
      speed: 1,
      active: -1,
      testing: -1,
      heights: Array(100)
          .fill(0)
          .map((x) => Math.floor(100*Math.random())),
      currentlySorting: false
    }
    this.setSpeed = this.setSpeed.bind(this);
    this.setNumOfBars = this.setNumOfBars.bind(this);
    this.setAlgorithm = this.setAlgorithm.bind(this);
    this.performSort = this.performSort.bind(this);
    this.applySort = this.applySort.bind(this);
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

  applySort(actions: Action[]) {
    let [ac, ...acs] = actions;
    if (ac.action === "active") {
      this.setState({active: ac.position});
    }
    else if (ac.action === "testing") {
      this.setState({testing: ac.position});
    }
    else if (ac.action === "swap" ){
      let heights = swap(this.state.heights, ...ac.swap);
      this.setState({heights: heights});
    }
    if (acs.length > 0) {
      setTimeout(() => this.applySort(acs), 100);
    }
  }

  performSort() {
    let actions = getSort("bubblesort", this.state.heights)
    this.setState({currentlySorting: true})
    this.applySort(actions);
  }

  render() {
    let ABProps: AlgorithmBarProps = {
      setSpeed: this.setSpeed,
      setAlgorithm: this.setAlgorithm,
      setNumOfBars: this.setNumOfBars
    }

    let plotProps: PlotProps = {
      numOfBars: this.state.numOfBars,
      heights: this.state.heights,
      active: this.state.active,
      testing: this.state.testing,
      currentlySorting: this.state.currentlySorting,
      startSort: this.performSort
    }

  return (
    <div className="main">
      <AlgorithmBar {...ABProps} />
      <div className="content-wrapper">
        <Plot {...plotProps} />
      </div>
    </div>
    );
  }
}

function getSort(alg: string, array: number[]): Action[] {
  let arr = array.slice(0);
  return bubbleSort(arr);
}

export default App;
