import React from 'react';

const TimelineItem = ({ id, time, title, desc, Date, onDelete }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-metadata">
          <div className="meta-left">
            <span className="time-tag">{time}</span>
            <span className="date-tag">{Date}</span>
          </div>
          <button className="item-delete-btn" onClick={() => onDelete(id)}>×</button>
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default TimelineItem;