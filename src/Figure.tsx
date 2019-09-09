import React from 'react';
import './Figure.sass';
import {Bar} from './Bar';


const Figure: React.FunctionComponent<FigureProps> = (props) => {
      {/* {props.heights.map((h, i) => <Bar key={i} height={h} width={1/props.heights.length} />)} */}
  return (
    <div className="figure">
      {props.bars}
    </div>
  )
}

export interface FigureProps {
  bars: React.FC[]
  {/* heights: number[] */}
}
export { Figure }
