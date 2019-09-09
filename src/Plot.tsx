import React from 'react';
import {Figure, FigureProps} from './Figure';
import {Bar, BarProps} from './Bar';
import './Plot.sass'


const heights: Array<number> = Array(50).fill(0).map((x) => Math.floor(100*Math.random()));
const bars = heights.map((h, i) => {
  return <Bar key={i} height={i} width={1/heights.length} />
});

const Plot: React.FunctionComponent = () => {
  return (
    <div className="plot">
      {/* <Figure heights={heights} /> */}
      <Figure bars={bars} />
      <Caption />
    </div>
  )
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
