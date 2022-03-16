import React, { useEffect, useState } from 'react';
import '../css/Dashboard.css';

const playerData = {
  name: 'Mookie Um',
  position: 'RHP',
  overrall: '80',
  nation: 'South Korea',
  height: '170cm',
};

const Dashboard = () => {
  const [barlist, setBarlist] = useState([
    'Strikeout',
    'win',
    'lose',
    'ERA',
    'WHIP',
  ]);

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
              {barlist.map((item, index) => (
                <div className="baritem" key={index} draggable>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>chartarea1</div>
          </div>
          <div>
            <div>chartarea2</div>
          </div>
          <div>
            <div>chartarea3</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
