import React from "react";

import "./Trend.css";
import TrendData from "../../Data/TrendData";

const Trend = () => {
  return (
    <div className='Trend'>
      <h2>Trend for your favorites !!!</h2>

      {TrendData.map((trend, index) => (
        <div className='trend__info' key={index}>
          <div className='trend__name'>#{trend.name}</div>
          <div className='trend__share'>{trend.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Trend;
