import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import './Schedule.css';

const Schedule = () => {
  // Initial Data (READ Operation)
  const [scheduleData, setScheduleData] = useState([
    { 
      id: 1, 
      time: "09:00 AM", 
      title: "Inauguration", 
      desc: "Kickstarting the nexus with the keynote speech.", 
      Date: "2025-11-02" 
    },
    { 
      id: 2, 
      time: "11:30 AM", 
      title: "Code Sprint", 
      desc: "4-hour rapid development challenge.", 
      Date: "2026-02-02" 
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ time: '', title: '', desc: '', Date: '' });

  // CREATE: Add a new event
  const handleAddEvent = (e) => {
    e.preventDefault();
    const eventWithId = { ...newEvent, id: Date.now() };
    setScheduleData([...scheduleData, eventWithId]);
    
    // Reset form state
    setNewEvent({ time: '', title: '', desc: '', Date: '' });
    setShowForm(false);
    alert("New Event Added to Timeline!");
  };

  // DELETE: Remove an event (Completes CRUD)
  const handleDelete = (id) => {
    if(window.confirm("Remove this event from the schedule?")) {
      setScheduleData(scheduleData.filter(item => item.id !== id));
    }
  };

  return (
    <section className="schedule-section" id="schedule">
      <div className="container">
        <div className="schedule-header">
          <h2 className="section-title">Event <span>Timeline</span></h2>
          <button 
            className={`btn-add-schedule ${showForm ? 'cancel' : ''}`} 
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "+ Schedule New Event"}
          </button>
        </div>

        {showForm && (
          <form className="add-event-form" onSubmit={handleAddEvent}>
            <h3>Initialize New Protocol</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Time</label>
                <input 
                  type="time" placeholder="e.g. 10:00 AM" required
                  value={newEvent.time}
                  onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input 
                  type="date" required
                  value={newEvent.Date}
                  onChange={(e) => setNewEvent({...newEvent, Date: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Event Title</label>
                <input 
                  type="text" placeholder="Enter Title" required
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea 
                placeholder="Briefly describe the event..." required
                value={newEvent.desc}
                onChange={(e) => setNewEvent({...newEvent, desc: e.target.value})}
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn_primary">Add to Schedule</button>
            </div>
          </form>
        )}

        <div className="timeline">
          {scheduleData.length > 0 ? (
            scheduleData.map((item) => (
              <TimelineItem 
                key={item.id} 
                id={item.id}
                time={item.time} 
                title={item.title} 
                desc={item.desc} 
                Date={item.Date}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p className="empty-msg">No events scheduled. Use the button above to add one.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Schedule;