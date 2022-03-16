import React from 'react';
import Dashboard from './component/Dashboard';
import RankKBO from './component/RankKBO';
import './css/App.css';

const App = () => {
  const textValue = 'mookie react';

  return (
    <>
      <div className="navbar">
        <span>{textValue}</span>
      </div>
      <RankKBO />
      <div className="content-wrapper">
        <Dashboard />
      </div>
    </>
  );
};

export default App;
