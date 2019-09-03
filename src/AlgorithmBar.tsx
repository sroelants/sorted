import React from 'react';
import './AlgorithmBar.sass'

const AlgorithmBar: React.FunctionComponent = () => {
  return (
    <div className="algorithmbar">
      <div className="algorithmbar__algorithms">
        <div className="algorithmbar__label">Algorithms:</div>
        <button className="algorithmbar__algorithm algorithmbar__algorithm--active">Merge sort</button>
        <button className="algorithmbar__algorithm">Heap sort</button>
        <button className="algorithmbar__algorithm">Bubble sort</button>
        <button className="algorithmbar__algorithm">Quick sort</button>
      </div>
      <div className="algorithmbar__size">
        <div className="algorithmbar__label">Size:</div>
        <input type="range" min="10" max="1000" className="algorithmbar__input"/>
      </div>
      <div className="algorithmbar__speed">
      <div className="algorithmbar__label">Speed:</div>
      <input type="range" min="10" max="1000" className="algorithmbar__input"/>
      </div>
    </div>);
}

export default AlgorithmBar
