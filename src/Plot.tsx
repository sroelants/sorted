import React from 'react';
import Figure from './Figure'
import './Plot.sass'

const Plot: React.FunctionComponent = () => {
  return (
    <div className="plot">
      <Figure />
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
