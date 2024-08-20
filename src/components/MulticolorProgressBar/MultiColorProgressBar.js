import React from 'react';
import '../../styles.css';

const MultiColorProgressBar = ({ percentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const violetPercentage = 20
  const redPercentage = 30
  const orangePercentage = 35
  const whitePercentage = 15

  const violetOffset = circumference * (1 - violetPercentage / 25);
  const redOffset = circumference * (1 - redPercentage / 25);
  const orangeOffset = circumference * (1 - orangePercentage / 25);
  const whiteOffset = circumference * (1 - whitePercentage / 25);

  return (
    <div className="progress-bar-container">
      <svg className='bar' viewBox="0 0 120 120">
        <circle
          className="progress-bg"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="20"
        />
        
        <circle
          className="progress-bar red"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={redOffset}
          transform={`rotate(${violetPercentage * 3.3} 60 60)`}
        />
        <circle
          className="progress-bar orange"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={orangeOffset}
          transform={`rotate(${(violetPercentage + redPercentage ) * 1.6} 60 60)`}
        />
        <circle
          className="progress-bar white"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={whiteOffset}
          transform={`rotate(${(violetPercentage + redPercentage + orangePercentage-62.9) * 3.6} 60 60)`}
        />
        <text
          className="progress-tex"
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="18"
        >
          {9859}
        </text>
      </svg>
    </div>
  );
};

export default MultiColorProgressBar;