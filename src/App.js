import React from 'react';
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
    </>
  );
};

export default App;
