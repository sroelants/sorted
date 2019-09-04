import React from 'react';
import './App.sass';
import Landing from './Landing'
import Plot from './Plot'
import AlgorithmBar from './AlgorithmBar'



const App: React.FC = () => {
  return (
    <div className="main">
      <AlgorithmBar />
      <div className="content-wrapper">
        <Plot />
      </div>
    </div>
  );

}

export default App;
