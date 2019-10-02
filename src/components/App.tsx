import React from "react";
import "./App.sass";
import Landing from "./Landing";
import { Plot, PlotProps } from "./Plot";
import { AlgorithmBar, AlgorithmBarProps } from "./AlgorithmBar";
import { bubbleSortGenerator } from "../algorithms/bubblesort";
import { mergeSortGenerator } from "../algorithms/mergesort";
import { heapSortGenerator } from "../algorithms/heapsort";
import { quickSortGenerator } from "../algorithms/quicksort";
import { heapify, bubbleDown } from "../algorithms/heapsort";
import { randArray } from "../utils/util";

const sortGens: any = {
  bubblesort: bubbleSortGenerator,
  mergesort: mergeSortGenerator,
  heapsort: heapSortGenerator,
  quicksort: quickSortGenerator
};

interface AppProps {}

interface AppState {
  numOfBars: number;
  algorithm: string;
  speed: number;
  active: number[];
  testing: number[];
  heights: number[];
  currentlySorting: boolean;
  finished: boolean;
  sortGen: Generator;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    let heights = randArray(50);
    this.state = {
      finished: false,
      numOfBars: 50,
      algorithm: "",
      speed: 2,
      active: [],
      testing: [],
      heights: heights,
      currentlySorting: false,
      sortGen: bubbleSortGenerator([])
    };
    this.setSpeed = this.setSpeed.bind(this);
    this.setNumOfBars = this.setNumOfBars.bind(this);
    this.setAlgorithm = this.setAlgorithm.bind(this);
    this.startSort = this.startSort.bind(this);
    this.pauseSort = this.pauseSort.bind(this);
    this.restartSort = this.restartSort.bind(this);
    this.sort = this.sort.bind(this);
  }

  setSpeed(speed: number) {
    this.setState({ speed: speed });
  }

  setNumOfBars(numOfBars: number) {
    const diff = numOfBars - this.state.numOfBars;
    const newHeights =
      diff > 0
        ? this.state.heights.concat(randArray(diff))
        : this.state.heights.slice(0, numOfBars);
    this.setState(state => {
      let algorithm: string = state.algorithm;
      return {
        heights: newHeights,
        numOfBars: numOfBars,
        sortGen: sortGens[algorithm](newHeights)
      };
    });
  }

  setAlgorithm(algorithm: string) {
    this.setState({
      algorithm: algorithm,
      sortGen: sortGens[algorithm](this.state.heights)
    });
  }

  startSort() {
    this.setState({ currentlySorting: true }, this.sort);
  }

  pauseSort() {
    this.setState({ currentlySorting: false });
  }

  restartSort() {
    let heights = randArray(this.state.numOfBars);
    let sortGen = sortGens[this.state.algorithm](heights);
    this.setState({
      heights: heights,
      sortGen: sortGen,
      currentlySorting: false,
      finished: false
    });
  }

  sort() {
    let { value, done } = this.state.sortGen.next();
    let heights: number[] = value.array;
    let active: number[] = value.active ? value.active : [];
    let testing: number[] = value.testing ? value.testing : [];
    this.setState({
      heights: heights,
      active: active,
      testing: testing
    });
    if (done) this.setState({ finished: true, currentlySorting: false });
    else if (this.state.currentlySorting)
      setTimeout(this.sort, 100 / this.state.speed);
  }

  render() {
    let ABProps: AlgorithmBarProps = {
      algorithm: this.state.algorithm,
      setSpeed: this.setSpeed,
      setAlgorithm: this.setAlgorithm,
      setNumOfBars: this.setNumOfBars
    };

    let plotProps: PlotProps = {
      numOfBars: this.state.numOfBars,
      heights: this.state.heights,
      active: this.state.active,
      testing: this.state.testing,
      currentlySorting: this.state.currentlySorting,
      finished: this.state.finished,
      startSort: this.startSort,
      pauseSort: this.pauseSort,
      restartSort: this.restartSort
    };

    return (
      <div className="main">
        <AlgorithmBar {...ABProps} />
        <div className="content-wrapper">
          {this.state.algorithm === "" ? <Landing /> : <Plot {...plotProps} />}
        </div>
      </div>
    );
  }
}

export default App;
