import React from 'react';

const EventCard = ({ event, onDelete }) => {
  return (
    <div className="event-card">
      <div className="card-image">
        <img src={event.image} alt={event.title} />
        <span className="category-tag">{event.category}</span>
      </div>
      
      <div className="card-body">
        <span className="event-date">{event.date}</span>
        <h3>{event.title.toUpperCase()}</h3>
        
        <div className="card-footer">
          <button className="btn-details">DETAILS</button>
          <button 
            className="btn-remove" 
            onClick={() => onDelete(event.id)}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;