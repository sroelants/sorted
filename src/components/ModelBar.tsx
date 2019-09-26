import React from "react";

const AlgorithmBar: React.FunctionComponent = () => {
  return (
    <div className="algorithmbar">
      {"Algorithms: "}
      <button className="algorithmbar__algorithm">Merge sort</button>
      <button className="algorithmbar__algorithm">Heap sort</button>
      <button className="algorithmbar__algorithm">Bubble sort</button>
      <button className="algorithmbar__algorithm">Quick sort</button>
      {"Size: "}
      <input type="range" min="10" max="1000" />
      {"Speed: "}
      <input type="range" min="10" max="1000" />
    </div>
  );
};

export default AlgorithmBar;
