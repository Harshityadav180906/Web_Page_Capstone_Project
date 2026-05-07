import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    college: '',
    event: 'Code Sprint'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // CRUD: Create (POST)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        alert(`Successfully Registered! Entry ID: NEX-${data.id}`);
        // Reset form
        setFormData({ fullname: '', email: '', college: '', event: 'Code Sprint' });
      }
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-container" id="register">
      <div className="register-glass-box">
        <div className="form-header">
          <h2>SECURE <span>ACCESS</span></h2>
          <p>Register your credentials for the Event-Edge nexus.</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <label>Full Name</label>
            <input 
              type="text" name="fullname" value={formData.fullname}
              onChange={handleChange} placeholder="John Doe" required 
            />
          </div>

          <div className="input-group">
            <label>College Email</label>
            <input 
              type="email" name="email" value={formData.email}
              onChange={handleChange} placeholder="name@college.edu" required 
            />
          </div>

          <div className="input-group">
            <label>Institution</label>
            <input 
              type="text" name="college" value={formData.college}
              onChange={handleChange} placeholder="Tech Institute of Delhi" required 
            />
          </div>

          <div className="input-group">
            <label>Select Track</label>
            <select name="event" value={formData.event} onChange={handleChange}>
              <option value="Code Sprint">Code Sprint</option>
              <option value="Robo-Wars">Robo-Wars</option>
              <option value="UI/UX Showdown">UI/UX Showdown</option>
              <option value="Drone Racing">Drone Racing</option>
            </select>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "INITIALIZING..." : "CONFIRM REGISTRATION"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;