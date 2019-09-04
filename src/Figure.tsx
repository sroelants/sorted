import React from 'react';
import './Figure.sass'

const Figure: React.FunctionComponent = () => {

  return (
    <div className="figure">
      <div style={{height: '300px'}} className="figure__bar"></div>
      <div style={{height: '100px'}} className="figure__bar"></div>
      <div style={{height: '400px'}} className="figure__bar"></div>
      <div style={{height: '320px'}} className="figure__bar"></div>
      <div style={{height: '120px'}} className="figure__bar"></div>
      <div style={{height: '160px'}} className="figure__bar"></div>
      <div style={{height: '210px'}} className="figure__bar"></div>
      <div style={{height: '189px'}} className="figure__bar"></div>
      <div style={{height: '320px'}} className="figure__bar"></div>
      <div style={{height: '380px'}} className="figure__bar"></div>
    </div>
  )
}

export default Figure
