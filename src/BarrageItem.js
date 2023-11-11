// BarrageItem.js
import React, { useState, useEffect } from 'react';
import './BarrageItem.css';

const BarrageItem = ({ text, onClick, onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const onAnimationEnd = () => {
      setAnimationComplete(true);
      onComplete();
    };

    const barrageElement = document.getElementById(`barrage-${text}`);

    if (barrageElement) {
      barrageElement.addEventListener('animationend', onAnimationEnd);
    }

    return () => {
      if (barrageElement) {
        barrageElement.removeEventListener('animationend', onAnimationEnd);
      }
    };
  }, [text, onComplete]);

  const handleClick = () => {
    if (!animationComplete) {
      // 处理用户点击交互
      onClick(text);
    }
  };

  return (
    <div
      id={`barrage-${text}`}
      className={`barrage-item ${animationComplete ? 'completed' : ''}`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default BarrageItem;
