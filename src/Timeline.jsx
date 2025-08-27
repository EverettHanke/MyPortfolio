import React from 'react';
import timelineData from './timelineData';
import './styles/Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h1>Work History</h1>
      <div className="timeline">
        {timelineData.map((item) => (
          <div className="timeline-item" key={item.id}>
            <div className="timeline-content">
              <span className="date">{item.date}</span>
              <h2>{item.title}</h2>
              <h3>{item.company}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
