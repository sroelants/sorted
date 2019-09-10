import React from 'react';
import './Bar.sass';

const Bar: React.FC<BarProps> = ({ height, width }) => {
  return <div style={{minHeight: 4*height + "px", width: 100*width + "%",
    margin: "0 " + 50 * width+ "px"} } className="figure__bar"></div>
}

export interface BarProps {
  height: number
  width: number
  active: boolean
  testing: boolean
}

export { Bar };
