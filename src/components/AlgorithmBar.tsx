import React from "react";
import "./AlgorithmBar.sass";

export interface AlgorithmBarProps {
  algorithm: string;
  setSpeed: (speed: number) => void;
  setNumOfBars: (num: number) => void;
  setAlgorithm: (alg: string) => void;
}

const AlgorithmBar: React.FunctionComponent<AlgorithmBarProps> = ({
  algorithm,
  setAlgorithm,
  setNumOfBars,
  setSpeed
}: AlgorithmBarProps) => {
  return (
    <div className="algorithmbar">
      <div className="algorithmbar__algorithms">
        <div className="algorithmbar__label">Algorithms:</div>

        <button
          className={
            algorithm === "mergesort"
              ? "algorithmbar__algorithm algorithmbar__algorithm--active"
              : "algorithmbar__algorithm"
          }
          onClick={() =>
            algorithm !== "mergesort" ? setAlgorithm("mergesort") : undefined
          }
        >
          Merge sort
        </button>

        <button
          className={
            algorithm === "heapsort"
              ? "algorithmbar__algorithm algorithmbar__algorithm--active"
              : "algorithmbar__algorithm"
          }
          onClick={() =>
            algorithm !== "heapsort" ? setAlgorithm("heapsort") : undefined
          }
        >
          Heap sort
        </button>

        <button
          className={
            algorithm === "bubblesort"
              ? "algorithmbar__algorithm algorithmbar__algorithm--active"
              : "algorithmbar__algorithm"
          }
          onClick={() =>
            algorithm !== "bubblesort" ? setAlgorithm("bubblesort") : undefined
          }
        >
          Bubble sort
        </button>

        <button
          className={
            algorithm === "quicksort"
              ? "algorithmbar__algorithm algorithmbar__algorithm--active"
              : "algorithmbar__algorithm"
          }
          onClick={() =>
            algorithm !== "quicksort" ? setAlgorithm("quicksort") : undefined
          }
        >
          Quick sort
        </button>
      </div>
      <div className="algorithmbar__size">
        <div className="algorithmbar__label">Size:</div>
        <input
          type="range"
          min="10"
          max="100"
          step="1"
          defaultValue="50"
          className="algorithmbar__input"
          onChange={ev => setNumOfBars(ev.target.valueAsNumber)}
        />
      </div>
      <div className="algorithmbar__speed">
        <div className="algorithmbar__label">Speed:</div>
        <input
          type="range"
          min="0.01"
          max="5"
          step="0.1"
          defaultValue="2"
          className="algorithmbar__input"
          onChange={ev => setSpeed(ev.target.valueAsNumber)}
        />
      </div>
    </div>
  );
};

export { AlgorithmBar };
