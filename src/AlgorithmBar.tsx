import React from 'react';
import './AlgorithmBar.sass'

export interface AlgorithmBarProps {
  setSpeed: (speed: number) => void,
  setNumOfBars: (num: number) => void,
  setAlgorithm: (alg: string) => void,
}


  const AlgorithmBar: React.FunctionComponent<AlgorithmBarProps> = 
    ({setAlgorithm, setNumOfBars, setSpeed}: AlgorithmBarProps) => {
  return (
    <div className="algorithmbar">
      <div className="algorithmbar__algorithms">
        <div className="algorithmbar__label">Algorithms:</div>

          <button className="algorithmbar__algorithm algorithmbar__algorithm--active"
            onClick={() => setAlgorithm("mergesort")}>Merge sort</button>

          <button className="algorithmbar__algorithm" 
            onClick={() => setAlgorithm("heapsort")}>Heap sort</button>

          <button className="algorithmbar__algorithm"
            onClick={() => setAlgorithm("bubblesort")}>Bubble sort</button>

          <button className="algorithmbar__algorithm"
            onClick={() => setAlgorithm("quicksort")}>Quick sort</button>
      </div>
      <div className="algorithmbar__size">
        <div className="algorithmbar__label">Size:</div>
        <input type="range" min="10" max="1000" step="10"
          className="algorithmbar__input"
          onChange={(ev) => setNumOfBars(ev.target.valueAsNumber)}/>
      </div>
      <div className="algorithmbar__speed">
      <div className="algorithmbar__label">Speed:</div>
      <input type="range" min="0.1" max="10" step="0.1"
        className="algorithmbar__input"
        onChange={(ev) => setSpeed(ev.target.valueAsNumber)}/>
      </div>
    </div>);
}

export {AlgorithmBar}
