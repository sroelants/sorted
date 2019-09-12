import React from 'react';
import {Figure} from './Figure';
import {Bar} from './Bar';
import {Caption, captionProps} from './Caption';
import './Plot.sass'
import {Action, bubbleSort, swap} from './sort';

export interface plotProps {
  numOfBars: number
}

export interface plotState {
  numOfBars: number,
  active: number,
  testing: number,
  heights: number[],
  currentlySorting: boolean
}

class Plot extends React.Component<plotProps, plotState> {
  constructor(props: plotProps) {
    super(props)
    this.state = {
      numOfBars: props.numOfBars,
      bars: [],
      active: 0,
      heights: [],
    } 
  }

  componentDidMount() {
    const heights = Array(this.props.numOfBars)
          .fill(0)
          .map((x) => Math.floor(100*Math.random()));
    this.setState({heights: heights});
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
      <Caption />
    </div>
  )
  }
}

const Caption: React.FunctionComponent = () => {
  return (
    <div className="caption">
      <div style={{display: 'flex'}}>
        <div className="caption__elements">{"Number of elements: " + 9}</div>
        <div className="caption__steps">{"Number of steps: " + 0}</div>
      </div>
      <button className="caption__sortbutton">Sort!</button>
    </div>
    );
}

export default Plot
