import React, { useState, useRef } from 'react';
import Hello from './Hello';
import './App.css';

const App = () => {
  const draggingItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState([
    'Lotte Giant',
    'Samsung Lions',
    'SSG Randers',
    'Hanhwa Eagles',
    'Doosan Bears',
    'NC Dinos',
    'KT Wiz',
    'KIA Tigers',
    'Kiwoom Heroes',
    'LG Twins',
  ]);
  const textValue = 'mookie react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 30,
    padding: '10px',
  };

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
    console.log(e.target.innerHTML);
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  return (
    <>
      <div style={style}>{textValue}</div>
      <Hello />
      {list &&
        list.map((item, index) => (
          <h1
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            key={index}
            draggable
          >
            {item}
          </h1>
        ))}
    </>
  );
};

export default App;
