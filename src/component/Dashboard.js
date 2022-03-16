import React, { useEffect, useState, useRef } from 'react';
import '../css/Dashboard.css';

const playerData = {
  name: 'Mookie Um',
  position: 'RHP',
  overrall: '80',
  nation: 'South Korea',
  height: '170cm',
};

const Dashboard = () => {
  const draggingItem = useRef();
  const chartContainer = useRef();
  const area = ['headerbar', 'chart1', 'chart2', 'chart3', 'noDrop'];

  const [items, setItems] = useState([
    { id: 1, type: 'headerbar', value: 'Strikeout' },
    { id: 2, type: 'headerbar', value: 'win' },
    { id: 3, type: 'headerbar', value: 'lose' },
    { id: 4, type: 'headerbar', value: 'ERA' },
    { id: 5, type: 'headerbar', value: 'WHIP' },
  ]);

  //   const [target, setTarget] = useState([]);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('drag-item', e.target.id);
    e.dataTransfer.effectAllowed = 'copy';
  };

  //   const handleDrag = (e) => {};

  //   const handleDragEnd = (e) => {};

  const handleDrop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData('drag-item');
    e.target.appendChild(document.getElementById(data));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="app_dashboard">
        <div className="app_dashboard__dnd-wrapper">
          <div className="div_info">
            <div>info</div>
            <ul>
              <li>
                <span>name</span>
                <span>{playerData.name}</span>
              </li>
              <li>
                <span>position</span>
                <span>{playerData.position}</span>
              </li>
              <li>
                <span>overrall</span>
                <span>{playerData.overrall}</span>
              </li>
              <li>
                <span>nation</span>
                <span>{playerData.nation}</span>
              </li>
              <li>
                <span>height</span>
                <span>{playerData.height}</span>
              </li>
            </ul>
          </div>
          <div>
            <div>headerbar</div>
            <div className="headerbar-wrapper">
              {items.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="baritem"
                  onDragStart={(e) => handleDragStart(e)}
                  draggable
                >
                  {item.value}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>chartarea1</div>
            <div
              ref={chartContainer}
              className="chartcontainer"
              onDrop={(e) => handleDrop(e)}
              onDragOver={(e) => handleDragOver(e)}
            ></div>
          </div>
          <div>
            <div>chartarea2</div>
            <div
              ref={chartContainer}
              className="chartcontainer"
              onDrop={(e) => handleDrop(e)}
              onDragOver={(e) => handleDragOver(e)}
            ></div>
          </div>
          <div>
            <div>chartarea3</div>
            <div
              ref={chartContainer}
              className="chartcontainer"
              onDrop={(e) => handleDrop(e)}
              onDragOver={(e) => handleDragOver(e)}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
