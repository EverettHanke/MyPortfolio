import React, { useEffect, useRef } from 'react';
import timelineData from './timelineData';
import './styles/Timeline.css';
import './styles/slideVFX.css';

const Timeline = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemsRef.current.indexOf(entry.target);
          if (index % 2 === 0) {
            entry.target.classList.add('slide-in-left');
          } else {
            entry.target.classList.add('slide-in-right');
          }
        }
      });
    });

    itemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <div className="timeline-container">
      <h1>Work History</h1>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            className="timeline-item"
            key={item.id}
            ref={(el) => (itemsRef.current[index] = el)}
          >
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
