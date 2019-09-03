import React from 'react';
import './App.sass';
import Landing from './Landing'
import AlgorithmBar from './AlgorithmBar'



const App: React.FC = () => {
  return (
    <div className="main">
      <AlgorithmBar />
      <Landing />
    </div>
  );

}

export default App;
