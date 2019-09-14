import React from 'react';
import {Figure} from './Figure';
import {Bar} from './Bar';
import {Caption, CaptionProps} from './Caption';
import './Plot.sass'
import {Action, bubbleSort, swap} from './sort';

export interface PlotProps {
  heights: number[]
  numOfBars: number,
  active: number,
  testing: number,
  currentlySorting: boolean,
  startSort: () => void
}

const Plot: React.FC<PlotProps>  = (props: PlotProps) => {
    const bars: JSX.Element[] = props.heights.map((h, i) => {
      return <Bar 
        key={i} 
        active={i === props.active} 
        testing={i === props.testing} 
        height={h}
        width={1/props.heights.length} />
    });

  return (
    <div className="plot">
      <Figure bars={bars} />
      <Caption numOfBars={props.numOfBars} 
        currentlySorting={props.currentlySorting}
        startSort={props.startSort}
      />
    </div>
  )
}
  

export {Plot}
