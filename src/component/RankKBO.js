import React, { useState, useRef } from 'react';

const RankKBO = () => {
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

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
    console.log(e.target.innerHTML);
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const handleDragEnd = (e) => {
    const listCopy = [...list];
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1); // draggingItem.current position에서 요소 1개 제거
    listCopy.splice(dragOverItem.current, 0, draggingItemContent); // draggingItemContent를 dragoverItem position에 추가

    draggingItem.current = null;
    dragOverItem.current = null;
    setList(listCopy);
  };

  return (
    <div>
      {list &&
        list.map((item, index) => (
          <h1
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragEnd={handleDragEnd}
            key={index}
            draggable
          >
            {item}
          </h1>
        ))}
    </div>
  );
};

export default RankKBO;
