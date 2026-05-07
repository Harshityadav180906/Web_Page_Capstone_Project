import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  // Set your college event date here
  const targetDate = new Date("December 31, 2026 00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <h2 className="countdown-title">THE NEURAL INTERFACE STARTS IN</h2>
      <div className="timer-wrapper">
        <div className="time-block">
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div className="time-separator">:</div>
        <div className="time-block">
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div className="time-separator">:</div>
        <div className="time-block">
          <span>{timeLeft.minutes}</span>
          <p>Mins</p>
        </div>
        <div className="time-separator">:</div>
        <div className="time-block">
          <span>{timeLeft.seconds}</span>
          <p>Secs</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;