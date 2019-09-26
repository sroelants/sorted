import React from 'react';
import './Figure.sass';


const Figure: React.FunctionComponent<FigureProps> = ({bars}) => {
  return (
    <div className="figure">{ bars }</div>
  )
}


// Using React.FC[] here doesn't work!

export interface FigureProps {
  bars: JSX.Element[]
}
export { Figure }
