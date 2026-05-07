import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // CRUD: Read (GET) - Fetching mock event data
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
        const data = await response.json();
        
        // Transforming mock data into Event objects
        const formattedEvents = data.map((item, index) => ({
          id: item.id,
          title: item.title.split(' ').slice(0, 3).join(' '),
          category: index % 2 === 0 ? "Technical" : "Creative",
          date: `Oct ${15 + index}, 2026`,
          image: `https://picsum.photos/seed/${item.id}/400/250`
        }));
        
        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error loading events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // CRUD: Delete - Removing event from frontend state
  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to remove this event from the nexus?")) {
      setEvents(events.filter(event => event.id !== id));
    }
  };

  return (
    <section className="events-section" id="events">
      <div className="events-header">
        <h2 className="section-title">ACTIVE <span>CHALLENGES</span></h2>
        <p>Explore and manage upcoming protocols in the college circuit.</p>
      </div>

      {loading ? (
        <div className="loader">INITIALIZING DATA...</div>
      ) : (
        <div className="events-grid">
          {events.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              onDelete={handleDelete} 
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Events;