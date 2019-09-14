import React from 'react';
import {Figure} from './Figure';
import {Bar} from './Bar';
import {Caption, CaptionProps} from './Caption';
import './Plot.sass'
import {Action, bubbleSort, swap} from './sort';

export interface PlotProps {
  numOfBars: number,
  algorithm: string,
  speed: number
}

export interface PlotState {
  numOfBars: number,
  active: number,
  testing: number,
  heights: number[],
  currentlySorting: boolean,
  algorithm: string,
  speed: number
}

class Plot extends React.Component<PlotProps, PlotState> {
  constructor(props: PlotProps) {
    super(props)
    this.state = {
      numOfBars: props.numOfBars,
      speed: props.speed,
      algorithm: props.algorithm,
      active: -1,
      testing: -1,
      heights: Array(props.numOfBars)
          .fill(0)
          .map((x) => Math.floor(100*Math.random())),
      currentlySorting: false
    }
    this.sort = this.sort.bind(this);
    this.applySort = this.applySort.bind(this);
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

  sort() {
    let actions = getSort("bubblesort", this.state.heights)
    this.applySort(actions);
    this.setState({currentlySorting: true})
  }

  render() { 
    const bars: JSX.Element[] = this.state.heights.map((h, i) => {
      return <Bar 
        key={i} 
        active={i === this.state.active} 
        testing={i === this.state.testing} 
        height={h}
        width={1/this.state.heights.length} />
    });
    return (
    <div className="plot">
      <Figure bars={bars} />
      <Caption numOfBars={this.props.numOfBars} 
        startSort={this.sort}
        currentlySorting={this.state.currentlySorting}
      />
    </div>
  )
  }
}
  
function getSort(alg: string, array: number[]): Action[] {
  let arr = array.slice(0);
  return bubbleSort(arr);
}

export default Plot
