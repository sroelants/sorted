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
  bars: JSX.Element[]
}

class Plot extends React.Component<plotProps, plotState> {
  constructor(props: plotProps) {
    super(props)
    this.state = {
      numOfBars: props.numOfBars,
      bars: [],
      active: 0,
      testing: 0,
    } 
  }

  componentDidMount() {
    const heights = Array(this.props.numOfBars)
          .fill(0)
          .map((x) => Math.floor(100*Math.random()));
    const bars: JSX.Element[] = heights.map((h, i) => {
      return <Bar 
        key={i} 
        active={i == this.state.active} 
        testing={i == this.state.testing} 
        height={h} 
        width={1/heights.length} />
    });

  }
  render() { 
    return (
    <div className="plot">
      <Figure bars={this.state.bars} />
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
