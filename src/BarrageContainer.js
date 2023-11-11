// BarrageContainer.js
import React, { useState, useEffect } from 'react';
import BarrageItem from './BarrageItem';
import './BarrageContainer.css';

const BarrageContainer = ({ barrages, scrollMode }) => {
  const [completedBarrages, setCompletedBarrages] = useState([]);

  const handleBarrageClick = (text) => {
    console.log(`Barrage Clicked: ${text}`);
    // 处理用户点击弹幕的逻辑
  };

  const handleBarrageComplete = (text) => {
    setCompletedBarrages((prevCompleted) => [...prevCompleted, text]);
  };

  useEffect(() => {
    setCompletedBarrages([]);
  }, [scrollMode]);

  return (
    <div className={`barrage-container ${scrollMode}`}>
      {barrages.map((text, index) => (
        <BarrageItem
          key={index}
          text={text}
          onClick={handleBarrageClick}
          onComplete={() => handleBarrageComplete(text)}
        />
      ))}
    </div>
  );
};

export default BarrageContainer;
